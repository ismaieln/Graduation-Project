import express from 'express'
const router = express.Router()
import {
  updateCart
} from '../controllers/cartController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, updateCart)

export default router
