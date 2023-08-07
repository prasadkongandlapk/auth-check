import {Route, Switch} from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
  </Switch>
)

export default App
