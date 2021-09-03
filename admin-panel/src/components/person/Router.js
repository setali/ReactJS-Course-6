import { Route, Switch } from 'react-router-dom'
import Full from './Full'
import List from './List'
import New from './New'

export default function Router () {
  return (
    <Switch>
      <Route path='/person' exact component={List} />
      <Route path='/person/new' component={New} />
      <Route path='/person/:id' component={Full} />
    </Switch>
  )
}
