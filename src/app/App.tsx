import * as React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import theme from '../config/theme';
import Header from '../sections/Header';
import AboutUs from '../sections/AboutUs';
import Navigation from '../sections/Navigation';
import "../style/override.css";

const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Navigation/>
            <Header/>
            <AboutUs/>
        </ChakraProvider>
    );
};

export default App;
