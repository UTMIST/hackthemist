import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../config/theme';
import Header from '../sections/Header';
import AboutUs from '../sections/AboutUs';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import Contact from '../sections/Contact';
import Sponsors from '../sections/Sponsors';
import FAQ from '../sections/FAQ';
import '../style/override.css';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Navigation />
            <Header />
            <AboutUs />
            <Sponsors />
            <FAQ />
            <Contact />
            <Footer />
        </ChakraProvider>
    );
};

export default App;
