import { combineReducers, createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import counterReducer from "./ducks/counter/counterDuck"

const store = createStore(
  combineReducers({
    counter: counterReducer,
  }),
  composeWithDevTools(applyMiddleware())
)

export default store
