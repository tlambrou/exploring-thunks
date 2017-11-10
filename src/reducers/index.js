import { combineReducers } from 'redux'
import { HANDLE_WAIT } from '../actions'


const thingReducer = (state = null, action) => {
  switch (action.type) {
    case HANDLE_WAIT:
      return action.payload
    default:
      return state
  }
}

const otherReducer = (state = null, action) => {
  switch (action.type) {
    case HANDLE_WAIT:
      return `$${action.payload.toFixed(2)}`
    default:
      return state
  }
}

export default combineReducers({
  thing: thingReducer,
  other: otherReducer
})
