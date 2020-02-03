// libs import
import * as React from "react";
import axios from "axios";

//fontawesome icons import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';

import hIcon from '../../assets/images/auth-icon.png';

import { Form } from './AuthForm';

export class Auth extends React.Component<{}, {} > {
  constructor(props: any) {
    super(props);
  } 

  render() {
    return (
      <div className="auth-warp">
        <div className="auth-block-warp">
        <div className="back-layer"></div>
          <div className="auth-form">
            <div className="auth-icon">
              <img src={hIcon} alt="" />
            </div>
            <div className="auth-header">
                <h1>Авторизация</h1>
            </div>
            <div className="auth-description">
              <span>
                Система защиты InvAcc защищает личные данные пользователей и предприятия
              </span>
            </div>
            <div className="auth-inputs">
              <Form 
                userPlaceholder = "Ваш логин"
                passPlaceholder = "Ваш пароль"
                userIcon        = { faUser }
                passIcon        = { faKey }/>
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