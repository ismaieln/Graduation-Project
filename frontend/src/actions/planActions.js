import axios from 'axios'
import {
  PLAN_CREATE_REQUEST,
  PLAN_CREATE_SUCCESS,
  PLAN_CREATE_FAIL,
} from '../constants/planConstants'

import { logout } from './userActions'

export const createPlan = (plan) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PLAN_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/plan`, plan, config)

    dispatch({
      type: PLAN_CREATE_SUCCESS,
      payload: data,
    })
    console.log(data)
    localStorage.setItem('planItems', JSON.stringify(data))
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: PLAN_CREATE_FAIL,
      payload: message,
    })
  }
}
