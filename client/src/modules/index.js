import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import {createStore, applyMiddleware, compose} from 'redux'
import fetchMiddleware from 'fetch-middleware'
import storeSynchronize from 'redux-localstore'
import thunkMiddleware from 'redux-thunk'

import Login from './Login'
import Users from './Users'

const combineReducer = combineReducers({
  form: formReducer,
  Login,
  Users
})

const store = createStore(
  combineReducer,
  {},
  compose(
    applyMiddleware(fetchMiddleware, thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

storeSynchronize(store)

export default store
