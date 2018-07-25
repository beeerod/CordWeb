import React, { Component } from 'react';
import Header from './header';
import Nav from './nav';
import Videos from './videos';
import listingsData from './data/listingsData';
import BottomInfo from './bottomInfo';


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
      <div className="row2">
      <Header />
      <section id="content-area">
        <Nav />
        <Videos listingsData={this.state.listingsData} />
      </section>
      <BottomInfo />
      </div>
    );
  }
}
