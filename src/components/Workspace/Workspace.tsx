//libs connection
import * as React from "react";

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
          <LeftMenu/>
          <TypeMenu/>
          <TableEditor/>
        </div>
      </div>
    )
  }
}