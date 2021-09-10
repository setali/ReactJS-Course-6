import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import fa from 'antd/es/locale/fa_IR'
import App from './components/App'
import { Provider as ReduxProvider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <ConfigProvider direction='rtl' locale={fa}>
    <ReduxProvider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ReduxProvider>
  </ConfigProvider>,
  document.getElementById('root')
)
