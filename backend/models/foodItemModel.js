import mongoose from 'mongoose'

// Foodstuff products
const foodItemSchema = mongoose.Schema(
  {
    farmer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Farmer',
    },
    name: {
      type: String,
      required: true,
      default: 'New Food Item',
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)
const FoodItem = mongoose.model('FoodItem', foodItemSchema)
export default FoodItem
