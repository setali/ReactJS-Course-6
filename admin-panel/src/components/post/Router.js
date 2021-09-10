import { Switch, Route } from 'react-router-dom'
import List from './List'
import Full from './Full'

export default function Router () {
  return (
    <Switch>
      <Route path='/post' exact component={List} />
      <Route path='/post/:id' exact component={Full} />
    </Switch>
  )
}
