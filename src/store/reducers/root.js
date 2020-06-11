import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { phones, checks } from './index'

export default history => combineReducers({
  phones,
  checks,
  router: connectRouter(history),
})
