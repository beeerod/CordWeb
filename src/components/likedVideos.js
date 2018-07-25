import React, { Component } from 'react';


export default class LikedVideos extends Component {
    constructor() {
        super()
        this.state = { name: 'likes' }
        this.loopThroughLikes = this.loopThroughLikes.bind(this);
    }

    loopThroughLikes() {
        var {likesData} = this.props

        if(likesData == undefined || likesData.length == 0) {
            return "Your do not have any likes."
        }

        return likesData.map((listing, index) => {
        return (
        <div className="listing-main col span-1-of-3" key={index}>
        <div className="listing">
          <div className="listing-info">
            <div className="listing-video">
              <p className="listing-video-text"><iframe src={listing.vid} height={listing.height} width={listing.width} frameborder="0" /></p>
            </div>
            <div className="details">
              <div className="col-md-9">
                <div className="beat-details">
                  <p className="listing-title j">{listing.title}</p>
                  <p className="beat-producer j">{listing.producer}</p>
                  <p className="beat-mood j">{listing.mood}</p>
                  <p className="beat-style j">{listing.style}</p>
                </div>
                <div className="listing-details">
                  <div className="listing-bpm">{listing.bpm}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>)
        })
    }

    render () {
        return (
        <section id="video-likes">
            <section id="video-like-heading">
          <div className="video-listings">
            <div className="video-listings-title-div">
              <p className="videos-title">Likes</p>
            </div>
            <div className="searchBar">
              <input type="text" name="search" className="search" />
            </div>
          </div>
          </section>
          <section id="beat-likes" className="row">
            {this.loopThroughLikes()}
          </section>
        </section>
        )
      };

    };