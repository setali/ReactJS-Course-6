import { Layout } from 'antd'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from 'components/generic/Header'
import Footer from 'components/generic/Footer'
import Sidebar from 'components/generic/Sidebar'
import Dashboard from 'components/generic/Dashboard'
import PersonRouter from 'components/person/Router'
import PostRouter from 'components/post/Router'
import 'antd/dist/antd.css'
import 'assets/css/general.css'

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
                <Route path='/post*' component={PostRouter} />
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
