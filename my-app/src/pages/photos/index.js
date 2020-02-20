import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const image = require('../../images/website-background.jpg');
const image3 = require('../../images/website-image1.jpg');

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
        return (
            <div style={{ width: '100%', backgroundSize: 'contain', justifyContent: 'center' }}>
                <img src={image3} style={{ height: 'auto', width: '100%' }}/>
            </div>
        );
    }
}

export default HomePage;
