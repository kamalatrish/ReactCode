import Header from './src/Header/headerComponent'
import LoginComponent from './src/Routes/login'
import Home from './src/Routes/home'
import ApiClass from './src/Routes/apiClass'
import ApiHook from './src/Routes/apiHook'
import UserClass from './src/Routes/userClass'
import UserHook from './src/Routes/userHook'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/ApiClass">
            <ApiClass />
          </Route>
          <Route path="/ApiHook">
            <ApiHook />
          </Route>
          <Route path="/ApiHook">
            <ApiHook />
          </Route>
          <Route path="/UserClass">
            <UserClass />
          </Route>
          <Route path="/UserHook">
            <UserHook />
          </Route>
          <Route path="/">
            <LoginComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}