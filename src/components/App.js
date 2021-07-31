import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Header from './Header';
import LinkList from './LinkList';
import CreateLink from './CreateLink';
import Login from './Login';
import Search from './Search';

const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/new/1" />}
          />
          <Route
            exact
            path="/create"
            component={CreateLink}
          />
          <Route exect path="/login" component={Login} />
          <Route exact path="/search" component={Search}></Route>
          <Route
            exact
            path="/new/:page"
            component={LinkList}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
