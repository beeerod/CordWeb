import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { term: ''};
  }

  render() {
    return (
      <div className="header">
        <div className="header-title">
          <h1 className="header-title-text">CORD</h1>
          <div className="log-in-btn">
            <p className="log-btn-text">Log In</p>
          </div>
          <input type="text" name="password" className="password-login" placeholder="Enter Password"/>
          <input type="text" name="email" className="email-login" placeholder="Enter Email"/>
        </div>

      </div>
    );
  }

}




export default Header;
