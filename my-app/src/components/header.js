import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    header: {
        position: 'fixed',
        zIndex: 2000,
        height: '50px',
        width: '100%',
        background: theme.palette.secondary.main,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
}));

function Header({onChangePage}) {
    const classes = useStyles();
    return (
        <AppBar className={classes.header}>
            <Toolbar>
                <Button color="primary" onClick={onChangePage('photos')}>Photos</Button>
                <Button color="primary" onClick={onChangePage('registry')}>Registry</Button>
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
