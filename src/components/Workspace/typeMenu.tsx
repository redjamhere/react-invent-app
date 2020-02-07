// import libs
import * as React from 'react';
import {Router, Route} from 'react-router';
import { HashRouter } from 'react-router-dom';

import { ServiceList } from './serviceList';

export class TypeMenu extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return(
      <div>etyetyty</div>
      // <Router history={HashRouter}>
      //   <Route component={TypeMenu}>
      //     <Route component={ServiceList} path="/services"></Route>
      //   </Route>
      // </Router>
    )
  }
}