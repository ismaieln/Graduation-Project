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
import { register } from '../actions/userActions'
import useEventGaTracker from '../hooks/useEventGaTracker'

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  const [apiKey, setApiKey] = useState('')
  const EventGaTracker = useEventGaTracker('SignUp')

  const dispatch = useDispatch()
  const userHistoryRoutes = useSelector((state) => state.userHistoryRoutes)
  const { routesHistory } = userHistoryRoutes
  const signupOriginPath = routesHistory[routesHistory.length - 3]

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error } = userRegister

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

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
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(name, email, password))
      EventGaTracker('successfull signup', signupOriginPath)
    }
  }

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

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

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='success' className='mt-2 btn btn-block'>
          Register
        </Button>
      </Form>

      <div className='or'> OR </div>
      {apiKey && (
        <>
          <GoogleAuth
            apiKey={apiKey.googleid}
            registerEvent={() => {
              EventGaTracker(
                'successfull signup with google ',
                signupOriginPath
              )
            }}
          />
          <FacebookAuth
            apiKey={apiKey.facebookid}
            registerEvent={() => {
              EventGaTracker(
                'successfull signup with facebook ',
                signupOriginPath
              )
            }}
          />
        </>
      )}

      <Row className='py-3'>
        <Col>
          Have an Account?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen
