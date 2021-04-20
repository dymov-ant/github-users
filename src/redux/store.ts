import {applyMiddleware, compose, createStore} from "redux"
import thunk from "redux-thunk"
import {reducer} from "./reducer"

export type TState = ReturnType<typeof reducer>
const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
export default createStore(reducer, composeEnhancers(applyMiddleware(thunk)))