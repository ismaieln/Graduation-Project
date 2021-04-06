import asyncHandler from 'express-async-handler'
import Farmer from '../models/farmerModel.js'
import FoodItem from '../models/foodItemModel.js'
import Product from '../models/productModel.js'

// to include nested tables to the api response
// (see .populate in controllers)
// otherwise there will be IDs in response instead of data
// https://mongoosejs.com/docs/populate.html#population
const nestedDocs = {
  path: 'foodItems',
  populate: {
    path: 'farmer',
  },
}

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        $or: [
          {
            name: {
              $regex: req.query.keyword,
              $options: 'i',
            },
          },
          {
            category: {
              $regex: req.query.keyword,
              $options: 'i',
            },
          },
        ],
      }
    : {}

  const foodItem = Object.keys(keyword).length
    ? await FoodItem.find({ ...keyword })
    : []
  const foodItemId = foodItem[0]?._id
  const bundle = foodItemId ? await Product.find({ foodItems: foodItemId }) : []
  const category = req.query.category ? { category: req.query.category } : {}

  const ratingNumber = Number(req.query.rating)
  const rating = ratingNumber
    ? {
        rating: {
          $gte: ratingNumber,
        },
      }
    : {}

  const price = {
    price: {
      $gte: Number(req.query.minPrice) || 0,
      $lte: Number(req.query.maxPrice) || 1000,
    },
  }

  const count = await Product.countDocuments({ ...keyword })
  const products = !foodItemId
    ? await Product.find({
        ...keyword,
        ...category,
        ...rating,
        ...price,
      })
        .limit(pageSize)
        .skip(pageSize * (page - 1))
        .populate(nestedDocs)
    : [...bundle]
  switch (req.query.orderBy) {
    case 'lowPrice':
      products.sort((a, b) => a.price - b.price)
      break
    case 'hiPrice':
      products.sort((a, b) => b.price - a.price)
      break
    case 'rating':
      products.sort((a, b) => b.rating - a.rating)
      break
    case 'time':
      products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      break
    default:
      break
  }
  res.json({ products, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id).populate(nestedDocs)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, category, countInStock } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name
    product.price = price
    product.description = description
    product.image = image
    product.category = category
    product.countInStock = countInStock

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    )

    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Product already reviewed')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }

    product.reviews.push(review)

    product.numReviews = product.reviews.length

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length

    await product.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3)

  res.json(products)
})

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
}
