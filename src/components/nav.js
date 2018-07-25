import React, { Component } from 'react';

export default class Nav extends Component {
  constructor() {
    super();
    this.state = { name: 'Brandon'};
  }


  render() {
    return (
      <section id="nav">
      <div className="nav-bar">
        <ul className="nav-bar-list">
          <li><a href="http://localhost:8080/">Home</a></li>
          <li><a href="http://localhost:8080/sign-up">Sign Up</a></li>
          <li><a href="http://localhost:8080/likes">Likes</a></li>
          <li><a href="http://localhost:8080/about">About</a></li>
        </ul>
      </div>
      </section>
    )
  }

}
