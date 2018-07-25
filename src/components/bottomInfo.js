import React from 'react';

const BottomInfo = () => {
  return (
    <div id="bottom-section">
      <div className="row2 how-it-works V1">
        <h1 className="bottom-head-text">HOW IT WORKS</h1>
        <iframe width="840" height="450" src="https://www.youtube.com/embed/5rtDECP0w-w" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div className="row2 how-it-works">
        <h1 className="bottom-head-text">WHAT OUR USERS SAY</h1>
        <iframe width="840" height="450" src="https://www.youtube.com/embed/txQ6t4yPIM0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div className="clearFix"></div>
    </div>
  )
};

export default BottomInfo;