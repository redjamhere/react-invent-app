import * as React from "react";
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';

import hIcon from '../../assets/images/auth-icon.png';

interface InputsState {
  username: string;
  data: string;
  password: string;
  isAuth: boolean;
}

export class Auth extends React.Component<{}, InputsState> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      data: 'Система защиты InvAcc защищает личные данные пользователей и предприятия',
      password: '',
      isAuth: false
    }

    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } 
  

  usernameChange(event: any) : void {
    this.setState({
      username: event.target.value,
    });
  }

  passwordChange(event: any) : void {
    this.setState({
      password: event.target.value,
    });
  }

  handleSubmit(event: any): void {
    event.preventDefault();
    axios.get('http://localhost:5555/auth', {
      params: {
        username: this.state.username,
        password: this.state.password
      }
    })
      .then(res => {
        this.setState({isAuth: res.data});
      })
  }

  render() {
    return (
      <div className="auth-warp">
        <div className="auth-block-warp">
        <div className="back-layer"></div>
          <div className="auth-form">
              <div className="auth-icon"><img src={hIcon} alt="" /></div>
              <div className="auth-header">
                  <h1>Авторизация</h1>
              </div>
              <div className="auth-description"><span>{this.state.data}</span></div>
              <div className="auth-inputs">
                <form onSubmit={this.handleSubmit}>
                  <div className="login-input input-block">
                    <div className="icon-wrap">
                      <FontAwesomeIcon className="user-icon" icon={faUser} />
                    </div>
                    <input type="text" id="username" value={this.state.username} onChange={this.usernameChange} placeholder="Ваш логин"/>
                  </div>
                  <div className="password-input input-block">
                    <div className="icon-wrap">
                      <FontAwesomeIcon className="pass-icon" icon={faKey} />
                    </div>
                    <input type="password" id="password" value={this.state.password} onChange={this.passwordChange} placeholder="Ваш пароль"/>
                  </div>
                  <div className="submit-input input-block">
                    <input type="submit" value="Вход" />
                  </div>
                </form>
              </div>
              <div className="footer">
                <span>Designed by Zaymanov Aynur</span>
                </div>
          </div>
        </div>
      </div>
    )
  }
}