import {
  PLAN_CREATE_REQUEST,
  PLAN_CREATE_SUCCESS,
  PLAN_CREATE_FAIL,
  PLAN_CREATE_RESET
} from '../constants/planConstants'

export const planCreateReducer = (state = { planItems: {} }, action) => {
  switch (action.type) {
    case PLAN_CREATE_REQUEST:
      const item = action.payload

      const existItem = state.planItems.find((x) => x.product === item.product)

      if (existItem) {
        return {
          ...state,
          planItems: state.planItems.map((x) =>
            x.product === existItem.product ? item : x
          )
        }
      } else {
        return {
          ...state,
          planItems: [...state.planItems, item]
        }
      }
    case PLAN_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        plan: action.payload
      }
    case PLAN_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case PLAN_CREATE_RESET:
      return {}
    default:
      return state
  }
}
