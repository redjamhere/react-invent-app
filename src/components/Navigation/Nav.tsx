// import libs
import * as React from "react";
import { Dropdown, DropdownButton, DropdownButtonProps } from 'react-bootstrap';

// import styles
import "./Nav.styl";

// import images
import projectIcon from "../../assets/images/project-icon.png";
import helpIcon from "../../assets/images/help-icon64.png";
import helpIconHovered from "../../assets/images/help-icon64-hovered.png";
import notifIcon from "../../assets/images/bell-icon64.png";
import notifIconHovered from "../../assets/images/bell-icon64-hovered.png";
import noneAvatar from "../../assets/images/none-profile-picture.jpg";

interface NavState {
  firstname: string;
}

export class Nav extends React.Component<{}, NavState> {
  constructor(props: any) {
    super(props);
    
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
                <img src={helpIcon} alt="Помощь" className="control-img"/>
                <img src={helpIconHovered} alt="Помощь" className="control-img img-top"/>
              </div>
            </li>
            <li className="control-item">
              <div className="notification">
                <img src={notifIcon} alt="Уведомления" className="control-img"/>
                <img src={notifIconHovered} alt="Уведомления" className="control-img img-top"/>
              </div>
            </li>
            <li className="control-item">
              <div className="mini-profile-avatar">
                <img src="" alt=""/>
              </div>
            </li>
            <li className="control-item">
              <div className="profile-dropdown-control">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="profile-dropdown">
                    Dropdown Button
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