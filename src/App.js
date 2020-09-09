import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Homepage from "./pages/homepage/index";
import GetSingleDataComponent from './components/currency/currency'

const App=()=>{
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
       
        <Route exact path="/currency/:id" component={GetSingleDataComponent} />
      </Switch>
    </div>
  );
}

export default withRouter( App);
