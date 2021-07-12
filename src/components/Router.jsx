import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Bookmark from './bookmark/Bookmark';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Bookmark} />
    </Switch>
  );
};

export default Router;
