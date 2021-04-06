import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

// @desc    Update subscription address
// @route   PUT /api/orders/:id/address
// @access  Private
const updateSubscriptionAddress = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate('user')

  if (order) {
    order.shippingAddress.address =
      req.body.address || order.shippingAddress.address
    order.shippingAddress.city = req.body.city || order.shippingAddress.city
    order.shippingAddress.postalCode =
      req.body.postalCode || order.shippingAddress.postalCode
    order.shippingAddress.country =
      req.body.country || order.shippingAddress.country

    const updatedOrder = await order.save()

    res.json({
      _id: updatedOrder._id,
      address: updatedOrder.shippingAddress.address,
      city: updatedOrder.shippingAddress.city,
      postalCode: updatedOrder.shippingAddress.postalCode,
      country: updatedOrder.shippingAddress.country,
    })
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

// @desc    Update subscription prefrences
// @route   PUT /api/orders/:id/:orderitemid/bundle
// @access  Private
const updateMySubscriptionPreferences = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate('user')
  if (order) {
    order.taxPrice = req.body.taxPrice || order.taxPrice
    order.shippingPrice = req.body.shippingPrice || order.shippingPrice
    order.totalPrice = req.body.totalPrice || order.totalPrice
    order.orderItems.map((bundle) => {
      if (String(bundle._id) === String(req.params.orderitemid)) {
        bundle.product = req.body.newBundleId || bundle.product
        bundle.size = req.body.size || bundle.size
        bundle.name = req.body.name || bundle.name
        bundle.image = req.body.image || bundle.image
        bundle.price = req.body.price || bundle.price
        bundle.qty = req.body.qty || bundle.qty
      }
    })

    const updatedOrder = await order.save()
    res.json(updatedOrder)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

// @desc    Delete bundle subscription
// @route   DELETE /api/orders/:id/:orderitemid
// @access  Private
const deleteBundleSubscription = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate('user')

  if (order) {
    const pos = order.orderItems.findIndex(
      ({ _id }) => _id == req.params.orderitemid
    )

    if (pos >= 0) {
      order.orderItems.splice(pos, 1)
      await order.save()
      res.json({ message: 'Subscription Canceled.' })
    } else {
      res.status(404)
      throw new Error('Order not found')
    }
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

// @desc    Get logged in user subscriptions
// @route   GET /api/subscriptions/mysubscriptions
// @access  Private
const getMySubscriptions = asyncHandler(async (req, res) => {
  const subscriptions = await Order.find({ user: req.user._id, isPaid: true })
  res.json(subscriptions)
})

export {
  updateSubscriptionAddress,
  updateMySubscriptionPreferences,
  deleteBundleSubscription,
  getMySubscriptions,
}
