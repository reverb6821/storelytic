import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'antd/dist/antd.css';

import Main from './Components/Main/Main'
import Home from './view/Home'
import Login from './view/Login'
import Products from './view/Product/Products';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
            <Main>
              <Route exact path='/dashboard' component={Home} />
              <Route exact path='/products-list' component={Products} />
              <Redirect from='*' to='/dashboard' />
            </Main>
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
