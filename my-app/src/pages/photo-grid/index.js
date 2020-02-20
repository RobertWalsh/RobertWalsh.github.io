import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Dialog from '@material-ui/core/Dialog';

import image1 from '../../images/(C)NicoleSpeer_03.jpg';
import image2 from '../../images/(C)NicoleSpeer_06.jpg';
import image3 from '../../images/(C)NicoleSpeer_08.jpg';
import image4 from '../../images/(C)NicoleSpeer_14.jpg';
import image5 from '../../images/(C)NicoleSpeer_17.jpg';
import image6 from '../../images/(C)NicoleSpeer_19.jpg';
import image7 from '../../images/(C)NicoleSpeer_23.jpg';
import image8 from '../../images/(C)NicoleSpeer_34.jpg';
import image9 from '../../images/(C)NicoleSpeer_40.jpg';
import image10 from '../../images/(C)NicoleSpeer_70.jpg';
import image11 from '../../images/(C)NicoleSpeer_71.jpg';
import image12 from '../../images/(C)NicoleSpeer_82.jpg';

const tileData = [
    { "img": image1, style: { transform: 'translateY(-40%)' } },
    { "img": image2, style: { transform: 'translateY(-51%)' } },
    { "img": image3, style: { transform: 'translateY(-67%)' } },
    { "img": image4, style: { transform: 'translateY(-42%)' } },
    { "img": image5 },
    { "img": image6, style: { transform: 'translateY(-55%)' } },
    { "img": image7 },
    { "img": image8, style: { transform: 'translateY(-55%)' } },
    { "img": image9, style: { transform: 'translateY(-55%)' } },
    { "img": image10, style: { transform: 'translateY(-63%)' } },
    { "img": image11, style: { transform: 'translateY(-60%)' } },
    { "img": image12 }
];

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden' 
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
}));

export default function SingleLineGridList() {
    const classes = useStyles();

    const [{isOpen, image}, setDialogDetails] = React.useState({isOpen: false, image: null});

    const handleClickOpen = (image) => () => setDialogDetails({isOpen: true, image });
    const handleClose = () => setDialogDetails({isOpen: false, image: null});

    return (
        <div className={classes.root}>
            <Dialog maxWidth maxWidth={'md'} style={{ zIndex: 2300, height: '100%', width: '100%' }} open={isOpen} onClose={handleClose}>
                <img onClick={handleClose} src={image} style={{ height: 'auto', width: '100%' }} />
            </Dialog>
            <GridList className={classes.gridList} cols={2.5}>
                {tileData.map(tile => (
                    <GridListTile key={tile.img} style={{ cursor: 'pointer' }} onClick={handleClickOpen(tile.img)}>
                        <img src={tile.img} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
