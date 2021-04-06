import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import { authGoogle } from '../actions/userActions'

const GoogleAuth = ({ apiKey, registerEvent }) => {
  const dispatch = useDispatch()

  const responseSuccessGoogle = (response) => {
    dispatch(authGoogle(response.tokenId))
    registerEvent()
  }

  return (
    <div>
      <GoogleLogin
        clientId={apiKey}
        render={(renderProps) => (
          <Button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className='btn btn-block my-2 btn-google'
            style={{ backgroundColor: '#CF4332', border: 'none' }}
          >
            <i
              style={{ float: 'left' }}
              className='fab fa-google-plus-g py-1'
            ></i>
            Continue with Google
          </Button>
        )}
        onSuccess={responseSuccessGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default GoogleAuth
