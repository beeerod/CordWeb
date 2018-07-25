import React, { Component } from 'react';
import Nav from './nav';
import Header from './header';
import likesData from './data/likesData';
import LikedVideos from './likedVideos';


export default class Likes extends Component {
    constructor() {
    super()

    this.state = { 
        term: 'blank',
        likesData
    };

    }

    render() {
        return (
        <div class="row2">
            <Header />
            <section id="content-area-likes">
            <Nav />
            <LikedVideos likesData = {this.state.likesData} />
            </section>
        </div>
        )
    }

}