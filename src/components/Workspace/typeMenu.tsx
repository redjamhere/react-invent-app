// import libs
import * as React from 'react';
import {Switch, Route} from 'react-router-dom';

// import styles

import './Typemenu.styl'

import { ServiceList } from './serviceList';
import { Warehouse } from './warehouse';
import { Centerprise } from './cEnterprise';


export class TypeMenu extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);

  }

  render() {
    return (
      <div className="submenu">
          <Switch>
            <Route exact path={`/`}>
              <ServiceList/>
            </Route>
            <Route path={'/warehouse'}>
              <Warehouse/>
            </Route>
            <Route path={'/1c'}>
              <Centerprise/>
            </Route>
          </Switch>
        </div>
    )
  }
}