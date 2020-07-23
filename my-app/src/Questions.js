import React from 'react';

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from './components/header';
import Footer from './components/footer';
import PhotoGrid from './pages/photo-grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import get from 'lodash/get';
import Divider from '@material-ui/core/Divider';

require('./styles.css');

const haley = require('./images/haley.png');
const kristen = require('./images/kristen.jpg');
const suzy = require('./images/suzy.png');
const jones = require('./images/jones.png');
const russell = require('./images/russell.png');

const marquee = require('./images/music-box-marquee.jpg');
const airbnb = require('./images/airbnb.png');
const knickerbocker = require('./images/milleniumknickerbockerhotel.png');
const holidayInn = require('./images/holidayinnexpress.png');
const hotelFelix = require('./images/HotelFelixLogo.png');

const target = require('./images/target.png');
const anthropologie = require('./images/anthropologie.png');
const cb2 = require('./images/cb2.png');


const image = require('./images/website-background.jpg');
const image3 = require('./images/website-image1.jpg');
const titleImage = require('./images/website-title.png');
const rightSwoosh = require('./images/website-right-side-flourish.png');
const leftSwoosh = require('./images/website-left-side-flourish.png');

const welcomePartyIcon = require('./images/party.png');
const ceremyIcon = require('./images/rings.png');
const cocktailsIcon = require('./images/cheers-icon.png');

const starImage = require('./images/star-image-pattern.png');

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
        padding: '45px 0 10px',
        ['@media (min-width:600px)']: {
            fontSize: '2.5vw',
        },
    },
    subContent: {
        backgroundColor: '#000',
        margin: '20px 0',
        padding: '2vw 0'
    },
    starSubContent: {
        backgroundColor: '#000',
        margin: '20px 0',
        paddingTop: '2vw',
    },
    subHeaderText: {
        fontFamily: 'Mirosa',
        fontSize: '3vw',
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
    ourStoryText: {
        fontFamily: 'Oswald',
        fontSize: '2.5vw',
        color: 'white',
        fontWeight: 100,
        margin: '0 1vw',
        textAlign: 'center',
        maxWidth: '55%',
        alignSelf: 'center',
        paddingTop: '10px',
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
        paddingBottom: '7vh'
    },
    weddingPartyContent: { 
        display: 'flex', 
        width: '100%',
        justifyContent: 'center',
        padding: '10vh 0 8vh',
        ['@media (max-width:600px)']: {
            flexWrap: 'wrap',
            padding: '4vh 0 4vh',
        },
    },
    hotelPartyContent: {
        display: 'flex',
        padding: '10vh 0 8vh',
        width: '100%',
        justifyContent: 'center',
        ['@media (max-width:600px)']: {
            flexWrap: 'wrap',
            height: 'auto',
            padding: '4vh 0 4vh',
        },
    },
    registryPartyContent: {
        display: 'flex',
        padding: '10vh 0 4vh',
        width: '100%',
        justifyContent: 'center',
        ['@media (max-width:600px)']: {
            flexWrap: 'wrap',
            padding: '4vh 0 4vh',
        },
    },
    cardRoot: {
        margin: '0 2vw',
        backgroundColor: 'transparent',
        color: 'white',
        minWidth: '15vw',
        ['@media (max-width:600px)']: {
            margin: '0 1vw',
            minWidth: '20vh',
            paddingBottom: 10
        },
    },
    cardRootHotel: {
        margin: '0 2vw',
        backgroundColor: 'transparent',
        color: 'white',
        minWidth: '15vw',
        ['@media (max-width:600px)']: {
            margin: '0 1vw',
            minWidth: '10vh',
            paddingBottom: 10
        },
    },
    cardMedia: {
        height: 0,
        paddingTop: '100%',
    },
    partyCardMedia: {
        height: 'auto', 
        width: '5vw',
        marginBottom: '20px',
        paddingBottom: 15,
        borderBottom: '1px solid white'
    },
    personCardName: {
        fontFamily: 'Oswald',
        fontSize: '2vw',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        ['@media (min-width:600px)']: {
            fontSize: '1.25vw',
        },
    },
    personCardTitle: {
        fontFamily: 'Oswald',
        fontSize: '2vw',
        color: 'white',
        fontWeight: 100,
        textAlign: 'center',
        alignSelf: 'center',
        ['@media (min-width:600px)']: {
            fontSize: '1.25vw',
        },
    },
    cardName: {
        fontFamily: 'Oswald',
        fontSize: '2vw',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        ['@media (min-width:600px)']: {
            fontSize: '1.75vw',
        },
    },
    cardTitle: {
        fontFamily: 'Oswald',
        fontSize: '2vw',
        color: 'white',
        fontWeight: 100,
        textAlign: 'center',
        alignSelf: 'center',
        marginBottom: '1vw',
        width: '75%',
        ['@media (min-width:600px)']: {
            fontSize: '1.25vw',
        },
    },
    cardTitle2: {
        fontFamily: 'Oswald',
        fontSize: '2vw',
        color: 'white',
        fontWeight: 100,
        textAlign: 'center',
        alignSelf: 'center',
        width: '75%',
        ['@media (min-width:600px)']: {
            fontSize: '1.25vw',
        },
    },
    cardSubTitle: {
        fontFamily: 'Oswald',
        fontSize: '1.5vw',
        color: 'white',
        fontWeight: 100,
        textAlign: 'center',
        alignSelf: 'center',
        ['@media (min-width:600px)']: {
            fontSize: '.8vw',
        },
    },
    weddingDetailsContent: {
        display: 'flex',
        paddingTop: '3vh',
        width: '100%',
        justifyContent: 'center',
        paddingTop: '5vh',
        ['@media (max-width:600px)']: {
            flexWrap: 'wrap',
        },
    },
    eventCardRoot: {
        margin: '0 1vw',
        backgroundColor: '#14231f',
        color: 'white',
        width: '33%',
        display: 'flex',
        flexDirection: 'column',
        ['@media (max-width:600px)']: {
            margin: '1vh 1vw',
            minWidth: '20vh',
            width: '65%',
        },
    },
    marqueeContainer: { 
        margin: '0 2vw',
        backgroundColor: 'transparent',
        color: 'white',
        minWidth: '15vw',
        padding: '10vh 0 8vh',
        ['@media (max-width:600px)']: {
            margin: '0 1vw',
            minWidth: '20vh',
            padding: '4vh 0 4vh',
        },
    }
}));

function PartyPerson(props) {
    const classes = useStyles();
    return (
        <Card className={classes.cardRoot}>
            <CardMedia className={classes.cardMedia} image={props.image}/>
            <CardContent style={{padding: 5}}>
                <Typography className={classes.personCardName}>{props.name}</Typography>
                <Typography className={classes.personCardTitle}>{props.title}</Typography>
                <div style={{ textAlign: 'center', margin: '.5vh 1vw'  }}>
                    <FiberManualRecordIcon style={{ fontSize: 5 }}/>
                </div>
                <Typography className={classes.cardSubTitle}>{props.subTitle}</Typography>
            </CardContent>
        </Card>
    )
}

function PartyEvent(props) {
    const classes = useStyles();
    return (
        <Card className={classes.eventCardRoot}>
            <CardContent style={{ alignItems: 'center', padding: 5, display: 'flex', flexDirection: 'column', margin: 20 }}>
                {
                    props.image &&
                    <img src={props.image} className={classes.partyCardMedia} style={get(props, 'style', {})} />
                }
                <Typography className={classes.cardName}>{props.name}</Typography>
                <Typography className={classes.cardTitle}>{props.date}</Typography>
                <Typography className={classes.cardTitle2}>{props.title}</Typography>
                <Typography className={classes.cardSubTitle}>{props.subTitle}</Typography>
            </CardContent>
        </Card>
    )
}

function PartyHotel(props) {
    const classes = useStyles();
    return (
        <Card className={classes.cardRootHotel}>
            <CardActionArea style={{textAlign: 'center', height: '8vw'}} onClick={() => { window.open(props.url, "_blank") }}>
                <img src={props.image} style={{ height: 'auto', width: '8vw', ...get(props, 'style', {}) }} />
            </CardActionArea>
        </Card>
    )
}


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
                <div className={classes.starSubContent} id='ourstory'>
                    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '3vh' }}>
                        <div style={styles2}>
                            <img src={leftSwoosh} style={{ height: 'auto', width: '5vw' }} />
                        </div>
                        <div className={classes.subHeaderText}>Our Story</div>
                        <div style={styles2}>
                            <img src={rightSwoosh} style={{ height: 'auto', width: '5vw' }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '3vh' }}>
                        <div className={classes.ourStoryText}>
                            In December 2013 Robert reached out to Tana via a message on OkCupid.  Oddly enough, both lived in the Seattle area at the time but were back home in Indiana for the holidays. Over the course of the month they continued to correspond until their official first date January 17th.  After living in Seattle for a few years the couple moved to Chicago to be closer to family and of course the beloved Cubs. 
                        </div>
                        <div className={classes.ourStoryText}>
                            On February 9th 2019, Robert suprised Tana with a proposal like no other!  When she returned from brunch with friends, he managed to pop the question using the Music Box marquee - and she said yes!
                        </div>
                        <Card className={classes.marqueeContainer} style={{textAlign: 'center'}}>
                            <img src={marquee} style={{ height: 'auto', width: '65%' }} />
                        </Card>
                    </div>
                    <img src={starImage} style={{ padding: '2vw, 0 0', height: 'auto', width: '100%' }} />
                </div>
                <div className={classes.subContent} id='weddingparty'>
                    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '3vh' }}>
                        <div style={styles2}>
                            <img src={leftSwoosh} style={{ height: 'auto', width: '5vw' }} />
                        </div>
                        <div className={classes.subHeaderText}>Wedding Party</div>
                        <div style={styles2}>
                            <img src={rightSwoosh} style={{ height: 'auto', width: '5vw' }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '3vh' }}>
                        <div className={classes.ourStoryText}>
                            Meet our family and friends that are standing with us
                        </div>
                        <div className={classes.weddingPartyContent}>
                            <PartyPerson name={'Haley Babcock'} title={'Maid Of Honor'} subTitle={'Sister of the Bride'} image={haley} />
                            <PartyPerson name={'Kristen Lindstrom'} title={'Bridesmaid'} subTitle={'Friend of the Bride'} image={kristen}/>
                            <PartyPerson name={'Suzy Bowes'} title={'Bridesmaid'} subTitle={'Friend of the Bride'} image={suzy}/>
                            <PartyPerson name={'Russell Walsh'} title={'Best Man'} subTitle={'Brother of the Groom'} image={russell}/>
                            <PartyPerson name={'Chris Jones'} title={'Groomsman'} subTitle={'Friend of the Groom'} image={jones}/>
                        </div>
                    </div>
                </div>
                <div className={classes.subContent} id='details'>
                    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '3vh' }}>
                        <div style={styles2}>
                            <img src={leftSwoosh} style={{ height: 'auto', width: '5vw' }} />
                        </div>
                        <div className={classes.subHeaderText}>Wedding Details</div>
                        <div style={styles2}>
                            <img src={rightSwoosh} style={{ height: 'auto', width: '5vw' }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '3vh' }}>
                        <div className={classes.ourStoryText}>
                            Check out the schedule of events below:
                        </div>
                        <div className={classes.hotelPartyContent}>
                            <PartyEvent name={'Welcome Party'} image={welcomePartyIcon} title={'Join us at the Hotel Zachary'} date={'Friday October 2nd • 7pm - 9pm'} subTitle={'All are welcome for great food and plentiful drinks!'}/>
                            <PartyEvent name={'Ceremony'} image={ceremyIcon} title={'Ravenswood Event Center'} date={'Saturday October 3rd 6:00pm'} subTitle={'There will be easy and free parking at the venue!'} />
                            <PartyEvent name={'Cocktails & Reception'} image={cocktailsIcon} title={'Ravenswood Event Center'} date={'Immediately following the ceremony, join us on the terrace for a cocktail hour.'} subTitle={'Then stick around for dinner, drinks, and dancing until 12am!'} />
                        </div>
                    </div>
                </div>
                <div className={classes.subContent} id='accomodations'>
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
                    <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '0' }}> 
                        <div className={classes.ourStoryText}>
                            Other Recommended places to stay:
                        </div>
                    </div>
                    <div className={classes.hotelPartyContent}>
                        <PartyHotel image={airbnb} url={'https://www.airbnb.com/s/Wrigleyville--Chicago--IL--United-States/homes?query=Wrigleyville%2C%20Chicago%2C%20IL%2C%20United%20States&place_id=ChIJi31GVbLTD4gR7kJeKzltuMM&refinement_paths%5B%5D=%2Fhomes&source=mc_search_bar&search_type=filter_change&click_referer=t%3ASEE_ALL%7Csid%3Ac7788473-69db-46de-bdb0-ba9b483fb1f4%7Cst%3AMAGAZINE_HOMES&title_type=MAGAZINE_HOMES&tab_id=home_tab&checkin=2020-10-02&checkout=2020-10-04&adults=2&room_types%5B%5D=Entire%20home%2Fapt'}/>
                        <PartyHotel image={knickerbocker} url={'https://www.millenniumhotels.com/en/bookings/?city=chicago&hotelcode=13525&checkin=2020-10-02&checkout=2020-10-04&promocode=&discountcode=&groupcode=&AAA=false&AARP=false&GOV=false&Accessible=false&adults=2&children=0&rooms=1&viewrates=rooms'} />
                        <PartyHotel image={holidayInn} url={'https://www.ihg.com/holidayinnexpress/hotels/us/en/find-hotels/hotel/rooms?qDest=640%20N.%20Wabash%20Avenue,%20Chicago,%20IL,%20US&qCiMy=92020&qCiD=2&qCoMy=92020&qCoD=4&qAdlt=2&qChld=0&qRms=1&qRtP=6CBARC&qSlH=CHIMM&qAkamaiCC=US&qSrt=sDD&qBrs=re.ic.in.vn.cp.vx.hi.ex.rs.cv.sb.cw.ma.ul.ki.va.ii.sp.nd.ct&qAAR=6CBARC&qWch=0&qSmP=1&setPMCookies=true&qRad=30&qRdU=mi&srb_u=1&qSHBrC=EX'} />
                        <PartyHotel image={hotelFelix} url={' https://reservations.travelclick.com/15366?&datein=10/02/2020&dateout=10/04/2020&rooms=1&adults=2&languageid=1&_ga=2.208397714.1425535070.1585404193-1466285541.1583380003#/accommodation/room'} />
                    </div>
                </div>
                <div className={classes.starSubContent} id='registry'>
                    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '3vh' }}>
                        <div style={styles2}>
                            <img src={leftSwoosh} style={{ height: 'auto', width: '5vw' }} />
                        </div>
                        <div className={classes.subHeaderText}>Registry</div>
                        <div style={styles2}>
                            <img src={rightSwoosh} style={{ height: 'auto', width: '5vw' }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '3vh' }}>
                        <div className={classes.ourStoryText}>
                            We're excited to see you and share with you in this special day!  If you'd like to contribute a gift, we are registered at the following retail stores:
                        </div>
                    </div>
                    <div className={classes.registryPartyContent}>
                        <PartyHotel image={target} url={'http://tgt.gifts/RobertandTana'} />
                        <PartyHotel image={anthropologie} style={{width: '20vw'}} url={'https://www.anthropologie.com/registry/listing?registryId=ZTU5ZJZJNMM5'} />
                        <PartyHotel image={cb2} url={'https://www.cb2.com/gift-registry/tana-babcock-and-robert-walsh/r6043314'} />
                    </div>
                    <img src={starImage} style={{ padding: '2vw, 0 0', height: 'auto', width: '100%' }} />
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
