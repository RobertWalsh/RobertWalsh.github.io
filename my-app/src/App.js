import React from "react";

const image = require('./images/wedding.png');

export default () => (
  <div style={{ 
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  }}>
  Butts
  </div>
);
