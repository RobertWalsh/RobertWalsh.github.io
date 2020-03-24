import React from 'react';

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from './components/header';
import Footer from './components/footer';
import PhotoGrid from './pages/photo-grid';

require('./styles.css');

const image = require('./images/website-background.jpg');
const image3 = require('./images/website-image1.jpg');
const titleImage = require('./images/website-title.png');
const rightSwoosh = require('./images/website-right-side-flourish.png');
const leftSwoosh = require('./images/website-left-side-flourish.png');

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
        fontSize: '3vw', 
        color: 'white',
        padding: '25px 0 10px',
        ['@media (min-width:600px)']: {
            fontSize: '2.5vw',
        },
    },
    subContent: {
        backgroundColor: '#000',
        margin: '1vh 0',
        padding: '2vw 0'
    },
    subHeaderText: {
        fontFamily: 'Oswald',
        fontSize: '3vw',
        fontStyle: 'italic',
        fontWeight: 100,
        color: 'white',
        margin: '0 1vw',
        textAlign: 'center',
        ['@media (min-width:600px)']: {
            fontSize: '2vw',
        },
    },
    subHeaderSubText: {
        fontFamily: 'Oswald',
        fontSize: '2.5vw',
        fontWeight: 100,
        color: 'white',
        margin: '0 1vw',
        textAlign: 'center',
        ['@media (min-width:600px)']: {
            fontSize: '1.5vw',
        },
    },
    venuLink: {
        fontFamily: 'Mirosa',
        fontSize: '3vw',
        color: 'white',
        textDecoration: 'none',
        ['@media (min-width:600px)']: {
            fontSize: '2.5vw',
        },
    },
    hotelLink: {
        fontFamily: 'Oswald',
        fontSize: '2.5vw',
        fontWeight: 100,
        color: 'white',
        textAlign: 'center',
        ['@media (min-width:600px)']: {
            fontSize: '1.5vw',
        },
    },
    dateText: {
        fontFamily: 'Mirosa',
        fontSize: '3.4vw',
        color: 'white',
        letterSpacing: '20px',
        paddingBottom: '4vh'
    },
}));

function App() {
    const classes = useStyles();

    return (
        <div style={styles} >
            <ThemeProvider theme={theme}>
                <Header/>
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
                <div className={classes.subContent}>
                    <div style={{display:'flex', justifyContent: 'center', paddingTop: '3vh'}}>
                        <div style={styles2}>
                            <img src={leftSwoosh} style={{ height: 'auto', width: '5vw' }} />
                        </div>
                        <div className={classes.subHeaderText}>Stay With Us!</div>
                        <div style={styles2}>
                            <img src={rightSwoosh} style={{ height: 'auto', width: '5vw' }} />
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', paddingBottom: '3vh'}}>
                        <div className={classes.subHeaderSubText}>
                            We highly recommend grabbing a room at the <a className={classes.hotelLink} href={'https://www.marriott.com/event-reservations/reservation-link.mi?id=1573588266448&key=GRP&app=resvlink/'}>Hotel Zachary</a>
                        </div>
                        <div className={classes.subHeaderSubText}>Click on the map to see more info.</div>
                    </div>
                    <Footer /> 
                </div>
                <div className={classes.subContent}>
                    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '3vh' }}>
                        <div style={styles2}>
                            <img src={leftSwoosh} style={{ height: 'auto', width: '5vw' }} />
                        </div>
                        <div className={classes.subHeaderText}>See our photos</div>
                        <div style={styles2}>
                            <img src={rightSwoosh} style={{ height: 'auto', width: '5vw' }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '3vh' }}>
                        <div className={classes.subHeaderSubText}>Scroll to the right to see a few photos from our engagement photoshoot!</div>
                        <div className={classes.subHeaderSubText} style={{fontSize: '1vw', paddingTop: '4px'}}><span style={{fontSize: '.8vw'}}>Ⓒ</span>	Nicole Speer Photography</div>
                    </div>
                    <PhotoGrid />
                </div>
            </ThemeProvider>
        </div>
    );
}
    
export default App;
