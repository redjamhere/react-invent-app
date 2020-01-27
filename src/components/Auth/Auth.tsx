import * as React from "react";

interface InputsState {
  username: String;
  password: String;
  isAuth: Boolean;
}

export class Auth extends React.Component<{}, InputsState> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isAuth: false
    }
  }

  render() {
    return (
      <div className="auth-warp">
        <div className="auth-block-warp">
          <div className="back-layer">

          </div>
          <div className="auth-form">
            <div className="auth-icon">
            </div>
            <div className="auth-header">
              <h1>Авторизация</h1>
            </div>
            <div className="auth-description">
              <span>Система безопасности InvAcc обеспечивает защиту <br/> личных данных пользователей и предприятия</span>
            </div>
            <div className="auth-input">
              <form action="">
                <div className="login-input input-block">
                  <i className="far fa-user"></i>
                  <input type="text" name="" id="usernmae" placeholder="Ваш логин"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}