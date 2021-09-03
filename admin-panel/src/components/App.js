import { Layout } from 'antd'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './generic/Header'
import Footer from './generic/Footer'
import Sidebar from './generic/Sidebar'
import Dashboard from './generic/Dashboard'
import PersonRouter from './person/Router'
import 'antd/dist/antd.css'
import '../assets/css/general.css'

const { Content } = Layout

function App () {
  return (
    <Router>
      <div className='App'>
        <Layout style={{ minHeight: '100vh' }}>
          <Header />
          <Layout>
            <Sidebar />
            <Content className='content'>
              <Switch>
                <Route path='/' exact component={Dashboard} />
                <Route path='/person*' component={PersonRouter} />
              </Switch>
            </Content>
          </Layout>
          <Footer />
        </Layout>
      </div>
    </Router>
  )
}

export default App
