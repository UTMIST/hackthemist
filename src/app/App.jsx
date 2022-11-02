import * as React from 'react';
import { ChakraProvider, Heading } from '@chakra-ui/react';
import theme from 'config/theme';

const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Heading>Welcome!</Heading>
        </ChakraProvider>
    );
};

export default App;
