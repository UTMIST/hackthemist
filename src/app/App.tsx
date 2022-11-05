import * as React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import theme from '../config/theme';
import Header from '../sections/Header';
import AboutUs from '../sections/AboutUs';
import {useEffect} from 'react';

const App = () => {
    useEffect(() => {
        document.title = 'Hack the MIST';
    })

    return (
        <ChakraProvider theme={theme}>
            <Header/>
            <AboutUs/>
        </ChakraProvider>
    );
};

export default App;
