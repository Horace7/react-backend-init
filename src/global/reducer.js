import { combineReducers } from 'redux'
import { userLogin } from '../pages/login/reduck'
import { connectRouter } from 'connected-react-router'

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  userLogin,
})

export default rootReducer
