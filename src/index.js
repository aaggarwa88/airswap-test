import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from 'store';

import AirSwapMain from 'containers/AirSwapMain'

/* CSS imports */
import './index.css'

const target = document.querySelector('#root')

/* --> START HERE <---- */

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <AirSwapMain />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
