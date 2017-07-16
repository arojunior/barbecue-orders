import boot from 'redux-boot'
import {reducer as formReducer} from 'redux-form'
import {applyMiddleware, compose} from 'redux'
import {getState} from 'redux-localstore'
import fetchMiddleware from 'fetch-middleware'
import thunkMiddleware from 'redux-thunk'
import {isEmpty} from 'ramda'

import Login from './Login'
import Users from './Users'

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f

const formModule = {
  reducer: (state, action) => ({
    ...state,
    form: formReducer(state.form, action)
  })
}

const enhancer = {
  enhancer: compose(applyMiddleware(fetchMiddleware, thunkMiddleware), devTools)
}

const modules = [formModule, Login, Users, enhancer]

const localStore = getState()

const defaultState = {
  isLogged: false,
  error: null
}

export default boot(isEmpty(localStore) ? defaultState : localStore, modules)
