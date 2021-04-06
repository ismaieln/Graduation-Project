import express from 'express'
const router = express.Router()
import {
  updateSubscriptionAddress,
  updateMySubscriptionPreferences,
  deleteBundleSubscription,
  getMySubscriptions,
} from '../controllers/subscriptionController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/:id/address').put(protect, updateSubscriptionAddress)
router
  .route('/:id/:orderitemid/bundle')
  .put(protect, updateMySubscriptionPreferences)
router.route('/:id/:orderitemid').delete(protect, deleteBundleSubscription)
router.route('/mysubscriptions').get(protect, getMySubscriptions)

export default router
