import asyncHandler from 'express-async-handler'
import sgMail from '@sendgrid/mail'
import User from '../models/userModel.js'

// @desc    Create a cart
// @route   POST /api/cart
// @access  Private
export const updateCart = asyncHandler(async (req, res) => {
  const currentUser = await User.findById(req.user._id)
  currentUser.cartItems = req.body.cartItems
  const savedUser = await currentUser.save()
  // first check - if user's cart is not empty then send email in some time
  if (savedUser.cartItems.length > 0) {
    setTimeout(() => {
      sendMail(req.user._id, savedUser.updatedAt)
    }, 1800000)
  } else {
    console.log(`${savedUser.name}'s cart is empty now!`)
  }
  res.status(201).json({
    message: 'Your cart was updated',
    cartItems: savedUser.cartItems,
  })
})

async function sendMail(userId, lastUpdateTime) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const user = await User.findById(userId)

  const functionLaunchedAt = new Date(lastUpdateTime).getTime()
  const databaseUpdatedAt = new Date(user.updatedAt).getTime()
  // second check - if after some time user's cart is still not empty
  // and NOW is the case of the final database update - finally send an email
  if (user.cartItems.length > 0 && functionLaunchedAt === databaseUpdatedAt) {
    const msg = {
      from: process.env.SENDER_EMAIL,
      personalizations: [
        {
          to: [
            {
              email: user.email,
            },
          ],
          dynamic_template_data: {
            bundleName: user.cartItems[0].name,
            price: user.cartItems[0].price,
            weeklyBundles: user.cartItems[0].qty,
            size: user.cartItems[0].size,
          },
        },
      ],
      templateId: 'd-ce85bb6861454c569db4dfbd1a75baf6',
    }
    await sgMail.send(msg)
    console.log(`Abandoned cart for ${user.email} was sent`)
  }
}
