import * as React from 'react';
import {Container, Stack, Box, Heading, Button, Text, Icon} from '@chakra-ui/react'
import {scrollToSection} from "../util/scroll";
import audience from '../img/audience.jpg';
import {
    EmailIcon,
} from '@chakra-ui/icons';

const Component = () => (
    <Box style={{backgroundImage: `url(${audience})`, backgroundSize: 'cover', backgroundAttachment: 'fixed'}}>
        <Box background={'rgba(0, 0, 0, 0.7)'}>
            <Container maxW={'3xl'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{base: 8, md: 14}}
                    py={{base: 20, md: 36}}
                    style={{paddingTop: '200px', paddingBottom: '200px'}}>
                    <Heading
                        color='white'
                        fontWeight={600}
                        fontSize={{base: '5xl', sm: '5xl', md: '7xl'}}>
                        Hack the MIST
                    </Heading>
                    <Heading
                        color={'white'}
                        fontSize={{base: '1xl'}}
                        style={{marginTop: '0'}}>
                        Spring 2022 @ University of Toronto | Presented by UTMIST
                    </Heading>
                    <Text color={'white'}>
                        Join our mailing list to be notified when our applications open!
                    </Text>
                    <Stack
                        style={{marginTop: "20px"}}
                        direction={{base: 'column', sm: 'column', md: 'row'}}
                        spacing={3}
                        align={'center'}
                        alignSelf={'center'}
                        position={'relative'}>
                        <Button
                            colorScheme={'blue'}
                            bg={'blue.600'}
                            rounded={'full'}
                            px={6}
                            _hover={{
                                bg: 'blue.500',
                            }}
                            onClick={() => window.open('https://eepurl.com/dGMddD', '_blank')}>

                            <Icon
                                as={EmailIcon}
                                w={6}
                                h={6}
                                style={{marginRight: '10px'}}
                            />

                            Join our mailing list
                        </Button>
                        <Button
                            colorScheme={'blue'}
                            bg={'blue.600'}
                            rounded={'full'}
                            px={6}
                            _hover={{
                                bg: 'blue.500',
                            }}
                            onClick={() => scrollToSection('#about-us')}>
                            Learn More
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    </Box>
);

export default Component;
