// import libs
import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import bootstrap components
import { Dropdown, DropdownButton, DropdownButtonProps } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

// import fontawesome icons
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

// import styles
import "./Nav.styl";

// import images
import projectIcon from "../../assets/images/project-icon.png";
import noneAvatar from "../../assets/images/none-profile-picture.jpg";


interface NavState {
  firstname: string;
}

//import components

import { HelpAlert } from './HelpAlert';

export class Nav extends React.Component<{}, NavState> {
  constructor(props: any) {
    super(props);
    this.state = {
      firstname: 'Иван',
    };
  }

  render() {
    return(
      <nav className="nav-wrapper">
        <div className="nav-header nav-item">
          <div className="icon">
            <img src={projectIcon} alt=""/>
          </div>
          <div className="name">
            <a href="#">InvAcc</a>
          </div>
        </div>
        <div className="nav-controls nav-item">
          <ul className="controls-list">
            <li className="control-item">
              <div className="help">
                <FontAwesomeIcon className="nav-control-icon" icon={ faQuestionCircle }/>
              </div>
            </li>
            <li className="control-item">
              <div className="notification">
                <FontAwesomeIcon className="nav-control-icon" icon={ faBell }/>
              </div>
            </li>
            <li className="control-item">
              <div className="mini-profile-avatar">
                <img src={noneAvatar} alt="prifile-mini-pic"/>
              </div>
            </li>
            <li className="control-item">
              <div className="profile-dropdown-control">
                <Dropdown alignRight>
                  <Dropdown.Toggle variant="success" id="profile-dropdown">
                    {this.state.firstname}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/auth">Профиль</Dropdown.Item>
                    <Dropdown.Item href="/">Настройки</Dropdown.Item>
                    <Dropdown.Item href="#">Выйти</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}