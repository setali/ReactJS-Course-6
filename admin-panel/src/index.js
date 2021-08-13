import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import fa from 'antd/es/locale/fa_IR'
import App from './components/App'

ReactDOM.render(
  <ConfigProvider direction='rtl' locale={fa}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ConfigProvider>,
  document.getElementById('root')
)
