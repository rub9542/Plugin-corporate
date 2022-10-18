import { combineReducers } from 'redux'
import authReducer from 'modules/Auth/reducers'
import corporateReducer from 'modules/Roles/reducers'

export default combineReducers({
  auth: authReducer,
  corporate: corporateReducer,
})
