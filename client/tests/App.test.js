import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'

import routes from '../src/routes'
import app from '../src/modules'

it('renders without crashing', () => {
  const div = document.createElement('div')

  app.then(({store}) => {
    render(
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>,
      div
    )
  })
})
