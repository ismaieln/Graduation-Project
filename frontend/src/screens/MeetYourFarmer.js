import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Meta from '../components/Meta'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { listFarmers } from '../actions/farmerActions'

const MeetYourFarmerScreen = ({ history }) => {
  const dispatch = useDispatch()
  const farmerList = useSelector((state) => state.farmerList)
  const { loading, error, farmers } = farmerList

  useEffect(() => {
    dispatch(listFarmers())
  }, [dispatch])

  return (
    <>
      <Meta title='Meet Your Farmers' />
      <Button
        className='btn btn-light my-3 mb-5'
        onClick={() => {
          history.goBack()
        }}
      >
        Go Back
      </Button>
      <Container>
        <h1 className='text-center'>MEET YOUR FARMERS</h1>
        <Row>
          <Col md={12}>
            <Image
              src='/images/dutch-farmer.jpg'
              alt='dutch-farmer'
              rounded
              fluid
            />
          </Col>
        </Row>
        <Row>
          <Col md={12} className='my-5'>
            <div className='text-justify'>
              <p>
                We consider them family, and we’re both out to change the world,
                starting with food.
              </p>
              <p>
                Together with our farm partners, we are a force for good. From
                creating premium products, to committing to organic and
                regenerative agriculture, we are revolutionizing a broken
                farming system and nourishing our world from the roots. We are
                advocating for nutritional policy reform and working to
                strengthen food security, as we lobby against harmful chemicals
                like glyphosate.
              </p>
              <p>
                We are cultivating a community of transparent suppliers as we
                work to revolutionize agriculture, and we are supporting
                businesses, communities, and programs that share these same
                goals and values. We are doing everything in our power for a
                healthier, more resilient future, and partnering with others to
                join us in doing the same. Learn more about our Healthy Farm
                Standard.
              </p>
              <p>
                Because if we replenish our soil with the nutrients it needs, we
                can replenish our bodies with the nutrients we're missing. If we
                source ingredients ethically, we don’t hurt the world we so
                desperately need to help. And if we work together, we can change
                our world.
              </p>
            </div>
          </Col>
        </Row>
        <h1>Some of our farm partners:</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Row>
            {farmers.map((farmer) => {
              return (
                <Col md={3} lg={2} key={`${farmer._id}`} className='d-flex'>
                  <Card className='rounded m-2 flex-column'>
                    <Link to={`/meetyourfarmer/${farmer._id}`}>
                      <Card.Img
                        src={farmer.image}
                        variant='top'
                        alt={farmer.name}
                        style={{
                          height: '15vh',
                        }}
                      />
                    </Link>
                    <Card.Body>
                      <Link to={`/meetyourfarmer/${farmer._id}`}>
                        <Card.Title as='h6'>
                          <strong style={{ fontSize: '0.6em' }}>
                            {farmer.name}
                          </strong>
                        </Card.Title>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
        )}
      </Container>
    </>
  )
}

export default MeetYourFarmerScreen
