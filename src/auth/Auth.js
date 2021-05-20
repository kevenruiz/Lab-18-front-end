import { Component } from 'react';
import './Auth.css';

export default class Auth extends Component {
  state = {
    isSignUp: true,
    name: '',
    email: '',
    password: '',
    error: ''
  }

  handleSwitch = () => {
    this.setState({ signUp: !this.setState.isSignUp });
  }

  handleNameChange = ({ target }) => {
    this.setState({ name: target.value });
  } 

  handleEmailChange = ({ target }) => {
    this.setState({ email: target.value });
  } 

  handlePasswordChange = ({ target }) => {
    this.setState({ password: target.value });
  } 

  render() {
    const { isSignUp, name, email, password, error } = this.state;
    
    return (
      <form className="Auth" onSubmit={this.handleSubmit}>
        {isSignUp && 
        <p>
          <label>
            <span>Name</span>  
            <input name="name" value={name} required={true}
              onChange={this.handleNameChange}/>

          </label>
        </p>}

        <p>
          <label>
            <span>Email</span>
            <input name="email" value={email} required={true}
              onChange={this.handleEmailChange}/>
          </label>
        </p>

        <p>
          <label>
            <span>Password</span>
            <input name="password" value={password} type="password" required={true}
              onChange={this.handlePasswordChange}/>
          </label>
        </p>

        <p>
          <button type="submit">Sign {isSignUp ? 'Up' : 'In'}
          </button>
        </p>

        <p>
          <button type="button" className="switch" onClick={this.handleSwitch}> 
            {isSignUp ? 'Already have an account?' : 'Need to create an account?'}    
          </button>
        </p>

        {error && <p>{error}</p>}
      </form>
    );
  }
}
