import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/home-page/home-page.component';
import SelectPage from './pages/select-page/select-page.component';
import ResultPage from './pages/result-page/result-page';
import NotFound from './pages/not-found-page/not-found-page';

import ErrorBoundary from './components/error-boundary/error-boundary.component';

import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <ErrorBoundary>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/select' component={SelectPage} />
          <Route exact path='/result' component={ResultPage} />
          <Route render={() => <Redirect to='/' />} />
          <Route path='*' component={NotFound} />
        </Switch>
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default App;
