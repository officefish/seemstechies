import { createStore, combineReducers } from 'redux'

import titleReducer from "./reducers/titleReducer";

let reducers = combineReducers ({
    document:titleReducer
})

let store = createStore(reducers)
export default store