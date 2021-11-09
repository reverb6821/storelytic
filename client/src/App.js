import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//? page import
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import AdminBoard from './Pages/Boards/AdminBoard';
import ModeratorBoard from './Pages/Boards/ModeratorBoard';
import PublicBoard from './Pages/Boards/PublicBoard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/adminboard" component={AdminBoard} />
        <Route exact path="/moderatorboard" component={ModeratorBoard} />
        <Route exact path="/publicboard" component={PublicBoard} />
      </Switch>
    </Router>
  );
};

export default App;
