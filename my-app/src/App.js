import React from 'react';

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from './components/header';
import Footer from './components/footer';
import PhotoGrid from './pages/photo-grid';

require('./styles.css');

const image = require('./images/website-background.jpg');
const image2 = require('./images/website-moonboy.png');
const image3 = require('./images/website-image1.jpg');
const titleImage = require('./images/website-title.png');

const styles = {
    background: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    display: 'flex',
    minHeight: '100%',
    flexDirection: 'column',
};
const styles2 = {
    justifyContent: 'center',
    textAlign: 'center',
    zIndex: 2001,
    position: 'fixed',
    width: '100%',
    top: '4vh',
    backgroundColor: 'transparent',
};

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: 'rgba(206,206,206,.9)',
        },
    },
});

const useStyles = makeStyles((theme) => ({
    pageComponentContainer: { 
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column', 
        width: '100%', 
        paddingTop: '50px' 
    },
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    titleAndImage: {
        width: '100%', 
        backgroundSize: 'contain', 
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    titleImage: {
        height: 'auto',
        width: '75%',
        marginTop: '-6.5%',
    },
    venuText: {
        fontFamily: 'Mirosa', 
        fontSize: '2vw', 
        color: 'white',
        padding: '25px 0 10px',
    },
    venuLink: {
        fontFamily: 'Mirosa',
        fontSize: '2vw',
        color: 'white',
        textDecoration: 'none',
    },
    dateText: {
        fontFamily: 'Mirosa',
        fontSize: '3.4vw',
        color: 'white',
        letterSpacing: '20px',
    },
}));

function App() {
    const classes = useStyles();
    return (
        <div style={styles} >
            <ThemeProvider theme={theme}>
                <Header/>
                <div style={styles2}>
                    <img src={image2} style={{ height: 'auto', width: '5vw' }}/>
                </div>
                <div className={classes.pageComponentContainer}>
                    <div className={classes.titleAndImage}>
                        <img src={image3} style={{ height: 'auto', width: '100%' }} />
                        <img src={titleImage} className={classes.titleImage} />
                    </div>
                    <div className={classes.venuText}>
                        <a className={classes.venuLink} href={'https://www.ravenswoodeventcenter.com/'}>Ravenswood Event Center</a>  •  Chicago il
                    </div>
                    <div className={classes.dateText}>10•03•20</div>
                </div>
                <PhotoGrid/>
                <Footer /> 
            </ThemeProvider>
        </div>
    );
}
    
export default App;
