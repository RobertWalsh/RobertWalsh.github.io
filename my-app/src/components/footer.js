import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center',
        height: '400px',
        width: '100%',
    }
}));

function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <div style={{ height: '75%', width: '100%' }}>
                <iframe style={{ border: 0, height: '100%', width: '100%' }} src="https://snazzymaps.com/embed/209837"></iframe>
            </div>
        </div>
    );
}

Footer.propTypes = {
    currentPage: PropTypes.string,
    onChangePage: PropTypes.func,
};

export default Footer;
