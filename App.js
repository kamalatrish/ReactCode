import Header from './src/Header/headerComponent'
import IndexComponent from './src/Routes/MobileKart/home'
import Product from './src/Routes/MobileKart/product'
import LoginComponent from './src/Routes/login'
import AssessmentIndex from './src/Routes/Assessment/assessmentIndex'
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
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/index">
            <IndexComponent />
          </Route>
          <Route path="/assessmentIndex">
            <AssessmentIndex />
          </Route>
          <Route path="/">
            <LoginComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}