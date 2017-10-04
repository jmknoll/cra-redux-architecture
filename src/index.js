import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './app/components/App'

import './styles/index.css'

const target = document.querySelector('#root')

/*history.listen((location, action) => {
  window.scrollTo(0, 0);
})
*/

render(
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)