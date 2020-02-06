// import libs
import * as React from 'react';

interface LeftMenuProps {
  
}

export class LeftMenu extends React.Component<LeftMenuProps, {}> {
  constructor(props: any) {
    super(props);
  }
  
  render() {
    const numbers: Array<number> = [1, 2, 3, 4, 5]
    const listItem = numbers.map((number) : void => {
      <li>{number}</li>
    })
    return(
      <div><ul>{listItem}</ul></div>
    )
  }
}