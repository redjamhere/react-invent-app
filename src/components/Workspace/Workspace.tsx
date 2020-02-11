//libs connection
import * as React from "react";
import {HashRouter as Router} from 'react-router-dom';
// import styles
import './Workspace.styl';

// components import
import { Nav } from "../Navigation/Nav";
import { LeftMenu } from "./LeftMenu";
import { TypeMenu } from "./TypeMenu";
import { TableEditor } from "./TableEditor";

export class Workspace extends React.Component<{}, {}> {
  render() {

    return (
      <div className="wrapper">
        <Nav/>
        <div className="workspace-warp">
          <Router>
            <LeftMenu/>
            <TypeMenu/>  
          </Router>
          <TableEditor/>
        </div>
      </div>
    )
  }
}