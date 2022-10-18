import { SIGN_IN_SUCCESS, CORPORATE_ID } from 'modules/Auth/actions'

const initialState = {
  token: null,
  corporateId: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.token,
      }
    case CORPORATE_ID:
      return {
        ...state,
        corporateId: action.id,
      }
    default:
      return state
  }
}
