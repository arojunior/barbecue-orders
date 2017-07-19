import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import storeSynchronize from 'redux-localstore'
import {Router, browserHistory} from 'react-router'

import registerServiceWorker from './registerServiceWorker'
import routes from './routes'
import app from './modules'

app.then(({store}) => {
  storeSynchronize(store)

  render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
  )
})

registerServiceWorker()
