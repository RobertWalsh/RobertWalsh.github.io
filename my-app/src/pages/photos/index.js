import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const image = require('../../images/wedding.png');
const styles = {
    background: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
};

class HomePage extends React.Component {
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
            <div style={{ height: '100%', width: '100%' }}>
                <div style={{ display: 'flex', height: '100%', width: '100%', justifyContent: 'center' }}>
                    <div style={{ width: '100%' }}>
                        <Slider {...settings}>
                            <div><div style={styles} /></div>
                            <div><div style={styles} /></div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
