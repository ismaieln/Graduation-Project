import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { OptimizelyFeature } from '@optimizely/react-sdk'

const Product = ({ product }) => {
  const imageStyle = {
    height: '12em',
    objectFit: 'cover',
  }
  return (
    <OptimizelyFeature feature='productimage'>
      {(enabled, variables) => (
        <Card className='my-3 p-3 rounded'>
          <Link to={`/product/${product._id}`}>
            {variables.bundleimage ? (
              <Card.Img
                src={product.image}
                variant='top'
                style={imageStyle}
              />
            ) : (
              <Card.Img
                src={product.farmImage}
                variant='top'
                style={imageStyle}
              />
            )}
          </Link>

          <Card.Body>
            <Link to={`/product/${product._id}`}>
              <Card.Title as='div'>
                <strong>{product.name}</strong>
              </Card.Title>
            </Link>

            <Card.Text as='div'>
              <Rating value={product.rating} text={`${product.numReviews}`} />
            </Card.Text>

            <Card.Text as='h3'>${product.price}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </OptimizelyFeature>
  )
}

export default Product
