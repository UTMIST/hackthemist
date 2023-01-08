import * as React from 'react';
import {
    Box,
    Container,
    Link,
    Flex,
    Text,
    Center,
    VStack,
    Image
} from '@chakra-ui/react';
import logo from '../img/logo.svg';

const Footer = () => {
    return (
        <Box
            bg={'#000'}
        >
            <Container maxW={'3xl'} py={10}>
                <Flex>
                    <Center>
                        <Link href="#">
                            <Image src={logo} className="headerlogo" />
                        </Link>
                        
                    </Center>
                    <Center pt={3} pl={10}>
                        <VStack align={'left'}>
                            <Text>
                                Presented by the&nbsp;
                                <Link
                                    href="https://utmist.gitlab.io"
                                    textDecor={'underline'}
                                    isExternal
                                    _hover={{ color: 'blue.600' }}
                                    transition={'0.25s'}
                                >
                                    University of Toronto Machine Intelligence Student Team
                                </Link>
                            </Text>
                            <Text>
                                <Link
                                    href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                                    textDecor={'underline'}
                                    isExternal
                                    _hover={{ color: 'blue.600' }}
                                    transition={'0.25s'}
                                >
                                    MLH Code of Conduct
                                </Link> | © 2022 UTMIST
                            </Text>
                        </VStack>
                    </Center>
                </Flex>
            </Container>
        </Box>
    )
}

export default Footer;