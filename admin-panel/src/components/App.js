import { Layout } from 'antd'
import Header from './generic/Header'
import Footer from './generic/Footer'
import Sidebar from './generic/Sidebar'
import Dashboard from './generic/Dashboard'
import 'antd/dist/antd.css'
import '../assets/css/general.css'

const { Content } = Layout

function App () {
  return (
    <div className='App'>
      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Layout>
          <Sidebar />
          <Content className='content'>
            <Dashboard />
          </Content>
        </Layout>
        <Footer />
      </Layout>
    </div>
  )
}

export default App
