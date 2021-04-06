import express from 'express'
const router = express.Router();
import { getFarmerById, getFarmers } from '../controllers/farmerController.js'

router.route('/meetyourfarmer').get(getFarmers)
router.route('/meetyourfarmer/:id').get(getFarmerById)

export default router