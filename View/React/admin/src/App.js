import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin';

import './App.css'


function App() {
  return (
    <div>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
