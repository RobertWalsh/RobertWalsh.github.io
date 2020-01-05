import React, { useState } from 'react';

import Photos from './pages/photos';
import Registry from './pages/registry';

import deepPurple from '@material-ui/core/colors/deepPurple';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from './components/header';
import Footer from './components/footer';

const theme = createMuiTheme({
    palette: {
        primary: deepPurple,
        secondary: {
            main: 'rgba(206,206,206,.9)',
        },
    },
});

const useStyles = makeStyles(() => ({
    pageComponentContainer: { paddingTop: '50px' }
}));

function App() {
    const classes = useStyles();

    const [currentPage, setCurrentPage] = useState('photos');

    let PageComponent = Photos;
    switch( currentPage ) {
        case 'photos':
            PageComponent = Photos;
            break;
        case 'registry': 
            PageComponent = Registry;
    }

    const changePage = (page) => () => setCurrentPage(page);

    return (
        <ThemeProvider theme={theme}>
            <div style={{ height: '100%', width: '100%'}}>
                <Header onChangePage={changePage} currentPage={currentPage}/>
                <div className={classes.pageComponentContainer}>
                    <PageComponent />
                </div>
                <Footer />
            </div>
        </ThemeProvider>
    );
}
    
export default App;
        