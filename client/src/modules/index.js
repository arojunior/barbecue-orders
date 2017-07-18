import boot from 'redux-boot'
import {reducer as formReducer} from 'redux-form'
import {getState} from 'redux-localstore'
import {isEmpty} from 'ramda'

import Router from './Router'
import Errors from './Errors'
import Login from './Login'
import Users from './Users'
import Companies from './Companies'
import Products from './Products'

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f

const formModule = {
  reducer: (state, action) => ({
    ...state,
    form: formReducer(state.form, action)
  })
}

const enhancer = {
  enhancer: devTools
}

const modules = [
  Router,
  formModule,
  Errors,
  Login,
  Users,
  Companies,
  Products,
  enhancer
]

const localStore = getState()

const defaultState = {
  isLogged: false,
  error: null
}

export default boot(isEmpty(localStore) ? defaultState : localStore, modules)
