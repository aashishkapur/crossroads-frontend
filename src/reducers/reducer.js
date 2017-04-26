import { combineReducers } from 'redux'
import { ADD_ID } from './actions'


function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
}

const xRoadReducer = combineReducers({
  todos
});

export default xRoadReducer;