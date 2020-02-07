// import libs
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//fontawesome icons
import { faBuffer } from '@fortawesome/free-brands-svg-icons';
import { faBoxes, faDatabase, faLessThanEqual } from '@fortawesome/free-solid-svg-icons';

// import styles
import './Leftmenu.styl'

interface MenuElementsProps {
  icon: any;
  text: string;
  index: number;
}

class MenuElement extends React.Component<MenuElementsProps, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return(
      <li id="menu-item" className="menu-item">
        <div className="menu-icon">
          <FontAwesomeIcon icon={ this.props.icon }/>
        </div>
        <div className="menu-name">
          <span className="menu-button-name">{ this.props.text }</span>
        </div>
      </li>
    )
  }
}

interface LeftMenuState {
  anchorEl: any;
  open: boolean;
  mouseOverMenu: boolean;
  width: string;
}


export class LeftMenu extends React.Component<{}, LeftMenuState> {
  constructor(props: any) {
    super(props);
    this.state = {
      anchorEl: null,
      open: false,
      mouseOverMenu: false,
      width: "70px"
    }
  }
  
  enterMenu(e: any): void {
    this.setState({
      width: "200px"
    })
  }

  leaveMenu(e: any):void {
    this.setState({
      width: "70px"
    })
  }
  
  render() {
    const menuList : Array<any> = [
      {
        icon: faBuffer,
        text: "Сервисы"
      },
      {
        icon: faBoxes,
        text: "Склад"
      },
      {
        icon: faDatabase,
        text: "Предприятие"
      },
    ]
    const listItem = menuList.map((elem, index) : any => {
      return (
        <MenuElement index={index} icon={elem.icon} text={elem.text}/>
      );
    })
    return(
        <div
          style={{width: this.state.width}}
          className="menu"
          onMouseEnter={ (e):void => this.enterMenu(e) }
          onMouseLeave={ (e):void => this.leaveMenu(e) }
        >
            <ul className="menu-list">{listItem}</ul>
        </div>
    );
  }
}