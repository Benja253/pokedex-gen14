import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//  Redux
import { Provider } from 'react-redux'
import store from './store'
// React Router
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
)
