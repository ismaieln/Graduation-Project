import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import {
  farmersDataSet,
  foodItemsDataSet,
  bundlesDataSet,
} from './data/bundles.js'
import User from './models/userModel.js'
import Farmer from './models/farmerModel.js'
import FoodItem from './models/foodItemModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()
colors.enable()
connectDB()

const importData = async () => {
  try {
    console.log(`farmers length: ${farmersDataSet.length}`)
    console.log(`food items length: ${foodItemsDataSet.length}`)
    console.log(`bundles length: ${bundlesDataSet.length}\n`)
    await Order.deleteMany()
    // await User.deleteMany()
    // const createdUsers = await User.insertMany(users)
    const adminUser = createdUsers[0]._id

    await Farmer.deleteMany()
    await FoodItem.deleteMany()
    await Product.deleteMany()

    const farmers = await Farmer.insertMany(farmersDataSet)

    const foodItems = await FoodItem.insertMany(
      foodItemsDataSet.map((product, index) => ({
        ...product,
        farmer:
          index < farmers.length
            ? farmers[index]
            : farmers[Math.floor(Math.random() * farmers.length)],
      }))
    )
    const shift = Math.ceil(foodItems.length / bundlesDataSet.length)
    await Product.insertMany(
      bundlesDataSet.map((bundle, i, arr) => ({
        ...bundle,
        foodItems:
          i !== arr.length - 1
            ? foodItems.slice(i * shift, i * shift + shift - 1)
            : foodItems.slice(i * shift),
        user: adminUser,
      }))
    )

    console.log(await Product.find())

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Farmer.deleteMany()
    await FoodItem.deleteMany()
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
