import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/homepage/Homepage'
import Shop from './pages/shop/Shop'
import Navbar from './components/navbar/Navbar'
import UserAuth from './components/user-management/UserAuth'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={UserAuth}></Route>
      </Switch>
    </div>
  );
}

export default App;
