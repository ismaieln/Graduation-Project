import React, { useEffect } from 'react'
import { Carousel, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel pause='hover' className='btn-light mb-5 carousel'>
      {product.foodItems?.map((item) => (
        <Carousel.Item key={item._id}>
          <Row className='m-3 text-center'>
            <img src={item.farmer.image} alt={item.farmer.name} />
            <div>
              <Link to={'/meetyourfarmer'}>
                <h2 className='mt-2'>{item.farmer.name}</h2>
              </Link>
              <p>
                <em>"{item.farmer.quote}"</em>
              </p>
            </div>
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProductCarousel
