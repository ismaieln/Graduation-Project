import asyncHandler from 'express-async-handler'
import Farmer from '../models/farmerModel.js'

// @desc Get farmers list
// @route GET /api/farmers/meetyourfarmer
// @access Public
const getFarmers = asyncHandler(async (req,res) => {
  const farmers = await Farmer.find({})
  res.json(farmers)

})

// @desc Get farmer details
// @route GET /api/farmers/meetyourfarmer/:id
// @access Public
const getFarmerById = asyncHandler(async (req,res) => {
  const farmer = await Farmer.findById(req.params.id)

  if (farmer) {
    res.json(farmer)
  } else {
    res.status(404)
    throw new Error('Farmer not found')
  }
})

export { getFarmers, getFarmerById }