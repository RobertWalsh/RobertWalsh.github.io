import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const image = require('./images/wedding.png');
const styles = {
  background: `url(${image})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '90%',
};

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div style={{ height: '100%', width: '100%'}}>
        <iframe src="https://snazzymaps.com/embed/209837" style={{ height: '100%', width: '100%' }}></iframe>
      <Slider {...settings}>
        <div>
          <div style={styles}/>
        </div>
        <div>
          <div style={styles} />
        </div>
      </Slider>
      </div>
    );
  }
}

export default () => (
  <div>    
    <SimpleSlider />
  </div>
);
