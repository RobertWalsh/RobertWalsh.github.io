import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
    }
}));

function Header({onChangePage}) {
    const classes = useStyles();
    return (
        <AppBar className={classes.header}>
            <Toolbar>
                
            </Toolbar>
        </AppBar>
    );
       
    //     <div className={classes.header}>
    //         <Button color="primary" onClick={onChangePage('photos')}>Photos</Button>
    //         <Button color="primary" onClick={onChangePage('registry')}>Registry</Button>
    //     </div>
    // );
}

Header.propTypes = {
    currentPage: PropTypes.string,
    onChangePage: PropTypes.func,
};

export default Header;
