import mongoose from 'mongoose'
import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import { redirectToHTTPS } from './middleware/redirectMiddleware.js'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import farmerRoutes from './routes/farmerRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import subscriptionRoutes from './routes/subscriptionRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import cartRoutes from './routes/cartRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(redirectToHTTPS)

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/farmers', farmerRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/subscriptions', subscriptionRoutes)
app.use('/api/upload', uploadRoutes)
app.use('/api/cart', cartRoutes)

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

app.get('/api/config/googleAnalytic', (req, res) =>
  res.send(process.env.TRACK_ID)
)

app.get('/api/config/googleMap', (req, res) =>
  res.send(process.env.GOOGLE_MAP_KEY)
)

app.get('/api/config/authid', (req, res) =>
  res.json({
    googleid: process.env.GOOGLE_CLIENT_ID,
    facebookid: process.env.FACEBOOK_CLIENT_ID,
  })
)

const __dirname = path.resolve()

app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
