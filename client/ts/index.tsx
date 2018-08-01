import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './Components/App/App'
import AppContainer from './Components/App/AppContainer'
import { Provider } from 'react-redux'
import { store } from './redux'

import './style.scss'

// Pretty sure <App /> being bad is a lie. Still look into it
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('portal')
)
