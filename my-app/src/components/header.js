import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import get from 'lodash/get';
const image = require('../images/website-background.jpg');

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    header: {
        position: 'fixed',
        zIndex: 2000,
        width: '100%',
        background: `url(${image})`,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    button: {
        fontFamily: 'Oswald',
        fontSize: '1.5vw',
        fontWeight: 100,
        color: 'white',
        textAlign: 'center',
        ['@media (min-width:600px)']: {
            fontSize: '1vw',
        },
    },
    button2: {
        fontFamily: 'Mirosa',
        fontSize: '3vw',
        fontWeight: 100,
        color: 'white',
        margin: '1.5vh 1vw 1vh',
        textAlign: 'center',
        cursor: 'pointer',
        width: '10%',
        textDecoration: 'none',
        ['@media (min-width:600px)']: {
            fontSize: '3vw',
        },
    },
    anchor: {
        fontFamily: 'Oswald',
        fontSize: '1.5vw',
        fontWeight: 100,
        color: 'white',
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        ['@media (min-width:600px)']: {
            fontSize: '1vw',
        },
    }
}));

function Header({ currentPage }) {
    const classes = useStyles();
    const [height, setHeight] = useState(0)
    const ref = useRef(null)

    const updateWidthAndHeight = () => {
        setHeight(ref.current.clientHeight)
    };
    useLayoutEffect(() => {
        updateWidthAndHeight()
    })
    useEffect(() => {
        window.removeEventListener('resize', updateWidthAndHeight);
        window.addEventListener('resize', updateWidthAndHeight);
    });

    return (
        <AppBar className={classes.header} ref={ref}>
            <Toolbar style={{justifyContent: 'center', width: '100%'}}>
                {
                    currentPage === 'main' &&
                    <div style={{ display: 'flex', justifyContent: 'space-around', width: '40%'}}>
                        <AnchorLink className={classes.anchor} offset={height} href='#ourstory'>OUR STORY</AnchorLink>
                        <AnchorLink className={classes.anchor} offset={height} href='#weddingparty'>WEDDING PARTY</AnchorLink>
                        <AnchorLink className={classes.anchor} offset={height} href='#details'>DETAILS</AnchorLink>
                    </div>
                }
                <Link to="/" style={{textDecoration: 'none'}}>
                    <div color="inherit" className={classes.button2}>R&T</div>
                </Link>
                {
                    currentPage === 'main' &&
                    <div style={{ display: 'flex', justifyContent: 'space-around', width: '40%' }}>
                        <AnchorLink className={classes.anchor} offset={height} href='#accomodations'>ACCOMMODATIONS</AnchorLink>
                        <AnchorLink className={classes.anchor} offset={height} href='#registry'>REGISTRY</AnchorLink>
                        <Link to="/questions" style={{textDecoration: 'none'}}>
                            <div className={classes.anchor}>COVID/QUESTIONS?</div>   
                        </Link>
                    </div>
                }
            </Toolbar>
        </AppBar>
    );
}

Header.propTypes = {
    currentPage: PropTypes.string,
    onChangePage: PropTypes.func,
};

export default Header;
