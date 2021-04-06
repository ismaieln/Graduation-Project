import {
  SUBSCRIPTION_UPDATE_ADDRESS_REQUEST,
  SUBSCRIPTION_UPDATE_ADDRESS_SUCCESS,
  SUBSCRIPTION_UPDATE_ADDRESS_FAIL,
  SUBSCRIPTION_UPDATE_PREFERENCES_REQUEST,
  SUBSCRIPTION_UPDATE_PREFERENCES_SUCCESS,
  SUBSCRIPTION_UPDATE_PREFERENCES_FAIL,
  SUBSCRIPTION_UPDATE_PREFERENCES_CLEAR,
  SUBSCRIPTION_CANCEL_REQUEST,
  SUBSCRIPTION_CANCEL_SUCCESS,
  SUBSCRIPTION_CANCEL_FAIL,
  SUBSCRIPTION_LIST_MY_REQUEST,
  SUBSCRIPTION_LIST_MY_SUCCESS,
  SUBSCRIPTION_LIST_MY_FAIL,
  SUBSCRIPTION_LIST_MY_RESET,
} from '../constants/subscriptionConstants'

export const subscriptionUpdateAddressReducer = (state = {}, action) => {
  switch (action.type) {
    case SUBSCRIPTION_UPDATE_ADDRESS_REQUEST:
      return { loading: true }
    case SUBSCRIPTION_UPDATE_ADDRESS_SUCCESS:
      return { loading: false, order: action.payload }
    case SUBSCRIPTION_UPDATE_ADDRESS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const subscriptionUpdatePreferencesReducer = (state = {}, action) => {
  switch (action.type) {
    case SUBSCRIPTION_UPDATE_PREFERENCES_REQUEST:
      return { loading: true }
    case SUBSCRIPTION_UPDATE_PREFERENCES_SUCCESS:
      return { loading: false, order: action.payload }
    case SUBSCRIPTION_UPDATE_PREFERENCES_FAIL:
      return { loading: false, error: action.payload }
    case SUBSCRIPTION_UPDATE_PREFERENCES_CLEAR:
      return {}
    default:
      return state
  }
}

export const subscriptionCancelReducer = (state = {}, action) => {
  switch (action.type) {
    case SUBSCRIPTION_CANCEL_REQUEST:
      return { loading: true }
    case SUBSCRIPTION_CANCEL_SUCCESS:
      return { loading: false, success: true }
    case SUBSCRIPTION_CANCEL_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const subscriptionListMyReducer = (
  state = { subscriptions: [] },
  action
) => {
  switch (action.type) {
    case SUBSCRIPTION_LIST_MY_REQUEST:
      return {
        loading: true,
      }
    case SUBSCRIPTION_LIST_MY_SUCCESS:
      return {
        loading: false,
        subscriptions: action.payload,
      }
    case SUBSCRIPTION_LIST_MY_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case SUBSCRIPTION_LIST_MY_RESET:
      return { subscriptions: [] }
    default:
      return state
  }
}
