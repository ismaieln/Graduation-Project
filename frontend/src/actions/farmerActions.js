import axios from 'axios'
import { 
  FARMER_LIST_REQUEST, 
  FARMER_LIST_SUCCESS, 
  FARMER_LIST_FAIL,
  FARMER_DETAILS_REQUEST,
  FARMER_DETAILS_SUCCESS,
  FARMER_DETAILS_FAIL
} from '../constants/farmerConstants'

export const listFarmers = () => async (dispatch) => {
  try {
    dispatch({
      type: FARMER_LIST_REQUEST,
    })

    const { data } = await axios.get('/api/farmers/meetyourfarmer')

    dispatch({
      type: FARMER_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({
      type: FARMER_LIST_FAIL,
      payload: message,
    })
  }
}

export const getFarmerDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: FARMER_DETAILS_REQUEST,
    })

    const { data } = await axios.get(`/api/farmers/meetyourfarmer/${id}`)

    dispatch({
      type: FARMER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: FARMER_DETAILS_FAIL,
      payload: message,
    })
  }
}