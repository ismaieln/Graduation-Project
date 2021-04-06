import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  Container,
} from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import {
  listProductDetails,
  createProductReview,
} from '../actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'
import ProductCarousel from '../components/ProductCarousel'

const ProductScreen = ({ history, match }) => {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const productReviewCreate = useSelector((state) => state.productReviewCreate)
  const {
    success: successProductReview,
    loading: loadingProductReview,
    error: errorProductReview,
  } = productReviewCreate

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createProductReview(match.params.id, {
        rating,
        comment,
      })
    )
  }
  useEffect(() => {
    if (successProductReview) {
      setRating(0)
      setComment('')
    }
    if (
      !product._id ||
      product._id !== match.params.id ||
      successProductReview
    ) {
      dispatch(listProductDetails(match.params.id))
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
    }
  }, [dispatch, match, successProductReview, product._id, product])

  const addToPlanHandler = () => {
    if (userInfo) {
      history.push(`/plan/${match.params.id}`)
    } else {
      history.push(`/login?redirect=plan/${match.params.id}`)
    }
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        product && (
          <>
            <Meta title={product.name} />
            <Row className='justify-content-between'>
              <Button
                className='btn-light my-5'
                onClick={() => {
                  history.goBack()
                }}
              >
                Go Back
              </Button>
              <Card className='my-5'>
                <Button
                  onClick={addToPlanHandler}
                  className='btn-success'
                  type='button'
                >
                  Proceed To Plan Your Bundle
                </Button>
              </Card>
            </Row>
            <Row>
              <Col md={6}>
                <Image src={product.image} alt={product.name} fluid />
              </Col>
              <Col md={6}>
                <ProductCarousel />
              </Col>
              <Col md={4} className='pt-5'>
                <Row className='justify-content-end'>
                  {product.reviews.length > 0 && (
                    <ListGroup.Item>
                      <p>Average Rating</p>
                      <div>
                        {
                          <Rating
                            value={product.rating}
                            text={`${product.numReviews} review${
                              product.numReviews !== 1 ? 's' : ''
                            }`}
                          />
                        }
                      </div>
                    </ListGroup.Item>
                  )}
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h3>{product.name}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h4>Products In This Bundle:</h4>
                    <Container>
                      <Row>
                        {product.foodItems?.map((item, key) => (
                          <Col
                            md={3}
                            className='py-3 d-flex flex-column'
                            key={`foodItem_${item._id}`}
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className='product-img'
                            />
                            <p className='py-1 flex-grow-1'>{item.name}</p>
                            <p>€ {item.price}</p>
                            <p>by: {item.farmer.name}</p>
                            <img
                              src={item.farmer.image}
                              alt={item.farmer.name}
                              className='product-img'
                            />
                            <hr className='w-100' />
                          </Col>
                        ))}
                      </Row>
                    </Container>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <h2>Reviews</h2>
                {product.reviews.length === 0 && <Message>No Reviews</Message>}
                <ListGroup variant='flush'>
                  {product.reviews.map((review) => (
                    <ListGroup.Item key={review._id}>
                      <strong>{review.name}</strong>
                      <Rating value={review.rating} />
                      <p>{review.createdAt.substring(0, 10)}</p>
                      <p>{review.comment}</p>
                    </ListGroup.Item>
                  ))}
                  <ListGroup.Item>
                    <h2>Rate Our Bundle</h2>
                    {successProductReview && (
                      <Message variant='success'>
                        Review submitted successfully
                      </Message>
                    )}
                    {loadingProductReview && <Loader />}
                    {errorProductReview && (
                      <Message variant='danger'>{errorProductReview}</Message>
                    )}
                    {userInfo ? (
                      <Form onSubmit={submitHandler}>
                        <Form.Group controlId='rating'>
                          <Form.Label>Rating</Form.Label>
                          <Form.Control
                            as='select'
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                          >
                            <option value=''>Select...</option>
                            <option value='1'>1 - Old</option>
                            <option value='2'>2 - Fair</option>
                            <option value='3'>3 - Good</option>
                            <option value='4'>4 - Fresh</option>
                            <option value='5'>5 - Super Fresh</option>
                          </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='comment'>
                          <Form.Label>Comment</Form.Label>
                          <Form.Control
                            as='textarea'
                            row='3'
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                          ></Form.Control>
                        </Form.Group>
                        <Button
                          disabled={loadingProductReview}
                          type='submit'
                          variant='success'
                        >
                          Submit
                        </Button>
                      </Form>
                    ) : (
                      <Message>
                        Please <Link to='/login'>sign in</Link> to write a
                        review{' '}
                      </Message>
                    )}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </>
        )
      )}
    </>
  )
}
export default ProductScreen
