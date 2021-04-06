import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'
import sgMail from '@sendgrid/mail'
import User from '../models/userModel.js';

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No order items')
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    })

    const createdOrder = await order.save()

    res.status(201).json(createdOrder)
  }
})

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  )

  if (order) {
    res.json(order)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

// @desc    Update order to paid
// @route   GET /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.isPaid = true
    order.paidAt = Date.now()
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    }

    const updatedOrder = await order.save()

    res.json(updatedOrder)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

// @desc Send subscription confirmation email
// @route POST /api/orders/:id/pay
// @access Private
const subscriptionConfirmationEmail = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)
  const user = await User.findById(order.user)

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  if (order) {
    const msg = {
      from: process.env.SENDER_EMAIL,
      personalizations: [
        {
          to: [
            {
              email: user.email
            }
          ],
          dynamic_template_data: {
            paymentMethod: order.paymentMethod,
            name: order.orderItems.map(item => item.name),
            qty: order.orderItems.map(item => item.qty),
            image: order.orderItems.map(item => item.image),
            price: order.orderItems.map(item => item.price),
            taxPrice: order.taxPrice,
            shippingPrice: order.shippingPrice,
            totalPrice: order.totalPrice,
          }
        }
     ],
     templateId: process.env.SUBSCRIPTION_CONFIRMATION_TEMPLATE,
    }
    sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
    res.json({ message: 'Done', order })
  } else {
    res.status(404)
    throw new Error('User & order not found')
  }
})


// @desc    Update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.isDelivered = true
    order.deliveredAt = Date.now()

    const updatedOrder = await order.save()

    res.json(updatedOrder)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id })
  res.json(orders)
})

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate('user', 'id name')
  res.json(orders)
})

export {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
  subscriptionConfirmationEmail,
}
