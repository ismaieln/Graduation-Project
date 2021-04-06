import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, Button } from 'react-bootstrap'
import { getFarmerDetails } from '../actions/farmerActions'
import Meta from '../components/Meta'
import Loader from '../components/Loader'
import Message from '../components/Message'

const FarmerScreen = ({ history, match }) => {
  const dispatch = useDispatch()
  const farmerDetails = useSelector((state) => state.farmerDetails)
  const { loading, error, farmer } = farmerDetails

  useEffect(() => {
    if (!farmer._id || farmer._id !== match.params.id) {
      dispatch(getFarmerDetails(match.params.id))
    }
  }, [dispatch, match, farmer._id])

  return (
    <>
      <Button
        className='btn btn-light my-3 mb-5'
        onClick={() => {
          history.goBack()
        }}
      >
        Go Back
      </Button>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        farmer && (
          <>
            <Meta title={farmer.name} />
            <Row>
              <Col md={12}>
                <div className='d-flex justify-content-center align-content-center'>
                  <div className='mx-5'>
                    <Image src={farmer.image} alt={farmer.name} rounded />
                  </div>
                  <div>
                    <h1>{farmer.name}</h1>
                    <p>{farmer.description}</p>
                    <p>
                      <strong>{farmer.city}</strong>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </>
        )
      )}
    </>
  )
}

export default FarmerScreen
