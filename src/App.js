import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';

import HomePage from './pages/home-page/home-page.component';
import SelectPage from './pages/select-page/select-page.component';

import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/select' component={SelectPage} />
      </Switch>
    </div>
  );
};

export default App;
