// import libs
import * as React from "react";
import axios from "axios";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// form statement init
interface FormState {
  username: string;
  password: string;
  isAuth: boolean;
}

// form properties init
interface FormProps {
  userPlaceholder: string;
  passPlaceholder: string;
  userIcon: any;
  passIcon: any;
}

export class Form extends React.Component<FormProps, FormState> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isAuth: false
    }

    this.usernameChange = this.usernameChange.bind(this); //bind this function to context
    this.passwordChange = this.passwordChange.bind(this); //bind this function to context
    this.handleSubmit = this.handleSubmit.bind(this);     //bind this function to context
  }

  // change 'username' state in key press
  usernameChange(event: any) : void {
    this.setState({
      username: event.target.value,
    });
  }

  // change 'password' state in key press
  passwordChange(event: any) : void {
    this.setState({
      password: event.target.value,
    });
  }

  // xhr request to authorization
  handleSubmit(event: any): void {
    event.preventDefault();
    axios.get('http://localhost:5555/auth', {
      params: {
        username: this.state.username, // send username state
        password: this.state.password  // send username state
      }
    })
    .then(res => {
      this.setState({isAuth: res.data}); //set isAuth state to true or false
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}> {/* call function on submit */}
        {/* login input wrap */}
        <div className="login-input input-block">
          {/* username icon set */}
          <div className="icon-wrap">
            <FontAwesomeIcon 
              className = "user-icon" 
              icon = { this.props.userIcon } />
          </div>
          {/* username input */}
          <input 
            type        = "text" 
            id          = "username" 
            value       = { this.state.username } 
            onChange    = { this.usernameChange } 
            placeholder = { this.props.userPlaceholder }/>
        </div>
        {/* password input wrap */}
        <div className="password-input input-block">
          {/* password icon set */}
          <div className="icon-wrap">
            <FontAwesomeIcon className="pass-icon" icon = { this.props.passIcon } />
          </div>
          {/* password input */}
          <input 
            type        = "password" 
            id          = "password" 
            value       = { this.state.password } 
            onChange    = { this.passwordChange } 
            placeholder = { this.props.passPlaceholder }/>
        </div>
        {/* submit button wrap */}
        <div className="submit-input input-block">
          {/* submit input */}
          <input type="submit" value="Вход" />
        </div>
      </form>
    )
  }
}

