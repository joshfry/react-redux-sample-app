import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostsScreenContainer from 'containers/PostsScreenContainer';
import 'antd/dist/antd.css';
import './App.scss';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={PostsScreenContainer} />
    </Switch>
  </Router>
);

export default App;
