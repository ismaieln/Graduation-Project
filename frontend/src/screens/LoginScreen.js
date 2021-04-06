import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import GoogleAuth from '../components/GoogleAuth'
import FacebookAuth from '../components/FacebookAuth'
import { login } from '../actions/userActions'
import useEventGaTracker from '../hooks/useEventGaTracker'

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [apiKey, setApiKey] = useState('')

  const EventGaTracker = useEventGaTracker('SignIn')

  const dispatch = useDispatch()
  const userHistoryRoutes = useSelector((state) => state.userHistoryRoutes)
  const { routesHistory } = userHistoryRoutes
  const signupOriginPath = routesHistory[routesHistory.length - 2]

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    } else {
      const getApiKey = async () => {
        try {
          const { data } = await axios.get('/api/config/authid')
          if (data) {
            setApiKey(data)
          } else {
            throw new Error('failed to fetch the api key')
          }
        } catch (error) {
          console.log(error)
        }
      }

      getApiKey()
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
    EventGaTracker('successfull signIn', signupOriginPath)
  }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className='mt-2 btn btn-block'>
          Sign In
        </Button>
      </Form>

      <div className='or'> OR </div>
      {apiKey && (
        <>
          <GoogleAuth
            apiKey={apiKey.googleid}
            registerEvent={() => {
              EventGaTracker(
                'successfull signIn with google ',
                signupOriginPath
              )
            }}
          />
          <FacebookAuth
            apiKey={apiKey.facebookid}
            registerEvent={() => {
              EventGaTracker(
                'successfull signIn with facebook ',
                signupOriginPath
              )
            }}
          />
        </>
      )}

      <Row className='py-3'>
        <Col>
          New Customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
