import React, { Component } from 'react';

export default class Videos extends Component {
  constructor() {
    super()
    this.state = { name: 'Brandon' }
    this.loopListings = this.loopListings.bind(this)
  }

  loopListings() {
  var {listingsData} = this.props

  if(listingsData == undefined || listingsData.length == 0) {
    return "Your search did not match any listings."
  }

  return listingsData.map((listing, index) => {
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
                  <p className="listing-title j">Title: {listing.title}</p>
                  <p className="beat-producer j">Producer: {listing.producer}</p>
                  <p className="beat-mood j">Mood: {listing.mood}</p>
                  <p className="beat-style j">Style: {listing.style}</p>
                </div>
                <div className="listing-details">
                  <div className="listing-bpm">BPM: {listing.bpm}</div>
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
    <section id="videos">
        <section id="video-heading">
      <div className="video-listings">
        <div className="video-listings-title-div">
          <p className="videos-title">Find The Beat For Your Next Hit Here.</p>
        </div>
        <div className="searchBar">
          <input type="text" name="search" className="search" />
        </div>
      </div>
      </section>
      <section id="beat-listings" className="row">
        {this.loopListings()}
      </section>
    </section>
    )
  }

}
