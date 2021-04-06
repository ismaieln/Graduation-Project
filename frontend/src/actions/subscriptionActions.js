import axios from 'axios'
import {
  SUBSCRIPTION_UPDATE_ADDRESS_REQUEST,
  SUBSCRIPTION_UPDATE_ADDRESS_SUCCESS,
  SUBSCRIPTION_UPDATE_ADDRESS_FAIL,
  SUBSCRIPTION_UPDATE_PREFERENCES_REQUEST,
  SUBSCRIPTION_UPDATE_PREFERENCES_SUCCESS,
  SUBSCRIPTION_UPDATE_PREFERENCES_FAIL,
  SUBSCRIPTION_CANCEL_REQUEST,
  SUBSCRIPTION_CANCEL_SUCCESS,
  SUBSCRIPTION_CANCEL_FAIL,
  SUBSCRIPTION_LIST_MY_REQUEST,
  SUBSCRIPTION_LIST_MY_SUCCESS,
  SUBSCRIPTION_LIST_MY_FAIL,
} from '../constants/subscriptionConstants'
import { logout } from './userActions'

export const updateSubscriptionAddress = (address, id) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: SUBSCRIPTION_UPDATE_ADDRESS_REQUEST,
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

    const { data } = await axios.put(
      `/api/subscriptions/${id}/address`,
      address,
      config
    )

    dispatch({
      type: SUBSCRIPTION_UPDATE_ADDRESS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: SUBSCRIPTION_UPDATE_ADDRESS_FAIL,
      payload: message,
    })
  }
}

export const updateSubscriptionPreferences = (
  subscription,
  id,
  orderItemId
) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUBSCRIPTION_UPDATE_PREFERENCES_REQUEST,
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

    const { data } = await axios.put(
      `/api/subscriptions/${id}/${orderItemId}/bundle`,
      subscription,
      config
    )

    dispatch({
      type: SUBSCRIPTION_UPDATE_PREFERENCES_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: SUBSCRIPTION_UPDATE_PREFERENCES_FAIL,
      payload: message,
    })
  }
}

export const cancelSubscription = (id, orderItemId) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: SUBSCRIPTION_CANCEL_REQUEST,
    })

    let {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/subscriptions/${id}/${orderItemId}`, config)

    dispatch({ type: SUBSCRIPTION_CANCEL_SUCCESS })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: SUBSCRIPTION_CANCEL_FAIL,
      payload: message,
    })
  }
}

export const listMySubscriptions = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUBSCRIPTION_LIST_MY_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(
      `/api/subscriptions/mysubscriptions`,
      config
    )

    dispatch({
      type: SUBSCRIPTION_LIST_MY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: SUBSCRIPTION_LIST_MY_FAIL,
      payload: message,
    })
  }
}
