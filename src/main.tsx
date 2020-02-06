// import libs
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


// import components
import { Auth } from "./components/Auth/Auth"; // Authentificate compoents
import { Workspace } from "./components/Workspace/Workspace"; // Main workspace component with tables and menu
import './main.styl'; // main style

// render and routing components
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/auth" component={ Auth }/>
      <Route exact path="/" component={ Workspace }/>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
)