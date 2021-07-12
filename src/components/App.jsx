import React from 'react';
import Header from './header/Header';
import Router from './Router';

const App = () => {
  return (
    <>
      <Header />
      <Router />
    </>
  );
};

App.displayName = 'App';
export default App;
