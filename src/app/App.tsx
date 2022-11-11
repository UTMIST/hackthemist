import * as React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import theme from '../config/theme';
import Header from '../sections/Header';
import AboutUs from '../sections/AboutUs';
import Navigation from '../sections/Navigation';
import "../style/override.css";
import Footer from '../sections/Footer';
import Contact from '../sections/Contact';
import Sponsors from '../sections/Sponsors';

const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Navigation/>
            <Header/>
            <AboutUs/>
            <Sponsors/>
            <Contact/>
            <Footer/>
        </ChakraProvider>
    );
};

export default App;
