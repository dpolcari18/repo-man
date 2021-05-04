import { createStore, combineReducers } from 'redux'

// reducers
import loginReducer from './reducers/loginReducer'
import repoReducer from './reducers/repoReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    repos: repoReducer
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store