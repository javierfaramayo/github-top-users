import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loader from './shared/components/loader/Loader'

const Home = lazy(() => import('./pages/components/home/HomeContainer'))
const Person = lazy(() => import('./pages/components/person/PersonContainer'))

function App(): JSX.Element {
  return (
    <Router>
      <Suspense fallback={<Loader></Loader>}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/user/:username" component={Person}></Route>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
