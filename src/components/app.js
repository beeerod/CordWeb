import React, { Component } from 'react';
import Header from './header.js';
import Nav from './nav.js';
import Videos from './videos.js';
import listingsData from './data/listingsData.js';
import Main from './Main.js';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Brandon',
      listingsData
    }
  }


  render() {
    return (
      <div>
      <Main />
      </div>
    );
  }
}
