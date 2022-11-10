import * as React from 'react';
import {
    Box,
    Container,
    Heading,
    Link,
    Flex,
    Text,
    useColorModeValue,
    Spacer,
    Center
} from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box
            bg={useColorModeValue('gray.800', 'white')}
            color={useColorModeValue('white', 'gray.800')}
        >
            <Container maxW={'3xl'} py={10}>
                <Flex>
                    <Center>
                        <Link href="#" _hover={{ color: 'blue.600' }} transition={'0.25s'}>
                            <Heading fontSize={25}>Hack the MIST</Heading>
                        </Link>
                    </Center>
                    <Spacer />
                    <Center>
                        <Text>© 2022 UTMIST</Text>
                    </Center>
                </Flex>
            </Container>
        </Box>
    )
}

export default Footer;