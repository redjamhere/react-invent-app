import * as React from 'react';
import {Suspense, lazy} from 'react';
import * as ReactDOM from "react-dom";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


// import components
import { Auth } from "./components/Auth/Auth"; // Authentificate compoents
import { Workspace } from "./components/Workspace/Workspace"; // Main workspace component with tables and menu
import './main.styl'; // main style
import { NotFound } from './components/Errors/Notfound';

// render and routing components
ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<div>Загрузка...</div>}>
      <Switch>
        <Route path="/auth" component={ Auth }/>
        <Route exact path="/workspace" component={ Workspace }></Route>
        <Route path="*" component={NotFound}/>
      </Switch>
    </Suspense>
  </BrowserRouter>,
  document.getElementById("root")
)