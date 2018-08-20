import { 
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import clockCounterReducer from './clock-n-counter/reducer'

const rootReducer = combineReducers({
  clockCounter: clockCounterReducer
})

export const initStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}