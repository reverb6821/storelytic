import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

//? fontawesome
import "@fortawesome/fontawesome-free/css/all.min.css";

//? layout import
import Auth from './layout/Auth';
import Main from './layout/Main';

const App = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route exact path="/main" component={Main} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
