import axios from 'axios'
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  CART_CLEAR_ITEMS,
} from '../constants/cartConstants'

export const addToCart = (id, qty, size) => async (dispatch, getState) => {
  dispatch({
    type: CART_CLEAR_ITEMS,
  })

  const { data } = await axios.get(`/api/products/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      size,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

  updateRemoteCart(getState)
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

  updateRemoteCart(getState)
}

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  })

  localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  })

  localStorage.setItem('paymentMethod', JSON.stringify(data))
}

export const clearCart = () => (dispatch, getState) => {
  dispatch({
    type: CART_CLEAR_ITEMS,
  })

  localStorage.removeItem('cartItems')

  updateRemoteCart(getState)
}

// synchronizes the cart in redux state with the cart in the backend
async function updateRemoteCart(getState) {
  // while adding new item to the backend cart check if user is logged in
  const {
    userLogin: {
      userInfo: { token },
    },
  } = getState()
  if (token) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    const {
      cart: { cartItems },
    } = getState()
    axios.post('/api/cart', { cartItems }, config)
  }
}
