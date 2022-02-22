import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './App';
import MainPage from './components/MainPage';
import ProfilePage from './components/ProfilePage';
import UploadPage from './components/UploadPage';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage} />
    <Route path="./components/ProfilePage" component={ProfilePage} />
    <Route path="./components/UploadPage" component={UploadPage} />
  </Route>
);