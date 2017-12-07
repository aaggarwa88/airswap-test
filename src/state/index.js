import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import airswapPrice from './airswapPrice'
import transactions from './transactions'

export default combineReducers({
  router: routerReducer,
  airswapPrice,
  transactions,
})
