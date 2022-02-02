import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './App.css'

import Login from './views/Login'

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
            {/* <Main>
              <Route exact path='/dashboard' component={Home} />
              <Redirect from='*' to='/dashboard' />
            </Main> */}
        </Switch> 
      </Router>
    </div>
  )
}

export default App
