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
    Center,
    VStack
} from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box
            bg={useColorModeValue('gray.800', 'white')}
            color={useColorModeValue('white', 'gray.800')}
        >
            <Container maxW={'3xl'} py={10}>
                <Flex>
                    <VStack alignItems={'left'} pb={{ base: 10, sm: 0 }}>
                        <Link href="#" _hover={{ color: 'blue.600' }} transition={'0.25s'}>
                            <Heading fontSize={25}>Hack the MIST</Heading>
                        </Link>
                        <Text>
                            Presented by the&nbsp;
                            <Link
                                textDecor={'underline'}
                                href="https://utmist.gitlab.io"
                                isExternal
                                _hover={{ color: 'blue.600' }}
                                transition={'0.25s'}
                            >
                                University of Toronto Machine Intelligence Student Team
                            </Link>
                        </Text>
                        <Link
                            href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                            textDecor={'underline'}
                            isExternal
                            _hover={{ color: 'blue.600' }}
                            transition={'0.25s'}
                        >
                            MLH Code of Conduct
                        </Link>
                    </VStack>
                    
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