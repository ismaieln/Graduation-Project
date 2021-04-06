import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productReviewCreateReducer,
  productTopRatedReducer,
} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userSubscriptionStatusReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
  userAuthFaceBookReducer,
  userAuthGoogleReducer,
  userHistoryRoutesReducer,
} from './reducers/userReducers'
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderDeliverReducer,
  orderListMyReducer,
  orderListReducer,
} from './reducers/orderReducers'
import {
  subscriptionUpdateAddressReducer,
  subscriptionUpdatePreferencesReducer,
  subscriptionCancelReducer,
  subscriptionListMyReducer,
} from './reducers/subscriptionReducer'
import { planCreateReducer } from './reducers/planReducers'
import { farmerListReducer, farmerDetailsReducer } from './reducers/farmerReducers'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productReviewCreate: productReviewCreateReducer,
  productTopRated: productTopRatedReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userSubscriptionStatus: userSubscriptionStatusReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  userAuthFaceBook: userAuthFaceBookReducer,
  userAuthGoogle: userAuthGoogleReducer,
  userHistoryRoutes: userHistoryRoutesReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  orderListMy: orderListMyReducer,
  orderList: orderListReducer,
  plan: planCreateReducer,
  subscriptionUpdateAddress: subscriptionUpdateAddressReducer,
  subscriptionUpdatePreferences: subscriptionUpdatePreferencesReducer,
  subscriptionCancel: subscriptionCancelReducer,
  subscriptionListMy: subscriptionListMyReducer,
  farmerList: farmerListReducer,
  farmerDetails: farmerDetailsReducer,
})

const planItemsFromStorage = localStorage.getItem('planItems')
  ? JSON.parse(localStorage.getItem('planItems'))
  : {}

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

const initialState = {
  plan: { planItems: planItemsFromStorage },
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
