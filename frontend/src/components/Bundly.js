import React from 'react'
import { useSelector } from 'react-redux'
import { Jumbotron, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useEventGaTracker from '../hooks/useEventGaTracker'

const Bundly = () => {
  const EventGaTracker = useEventGaTracker('Subscribe Now Button')
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  return (
    <>
      <Jumbotron className='my-5'>
        <h1 className='display-3'>Save time, money and local farmers!</h1>
        <p className='lead'>
          Do you know how much time spent thinking about what to buy? What to
          cook and going to the supermarket? We are here to help you solve all
          those problems. It is great to have your natural and healthy foods,
          fast and easy. It is direct from the farms to your kitchen. It’s
          simple and seasonal. You choose which bundle fits your needs.
          Subscribe once. You’ll never forget to order again! Most importantly,
          we’re helping our farmers stay in business. That way, you eat fresh
          produce grown locally!
        </p>
        <Link to={userInfo ? '/plan' : '/register?redirect=/'}>
          <Button
            className='homepage-button'
            variant='primary'
            size='lg'
            block
            onClick={() =>
              EventGaTracker('successfull Subscribe Now clicked', '/')
            }
          >
            SUBSCRIBE NOW
          </Button>
        </Link>
      </Jumbotron>
    </>
  )
}

export default Bundly
