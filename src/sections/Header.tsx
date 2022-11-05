import * as React from 'react';
import {Container, Stack, Box, Heading, Button, Text} from '@chakra-ui/react'
import {scrollToSection} from "../util/scroll";
import audience from '../img/audience.jpg';

const Component = () => (
    <Box style={{width: '100vw', backgroundImage: `url(${audience})`, backgroundPosition: '10px', backgroundAttachment: 'fixed'}}>
        <Box background={'rgba(0, 0, 0, 0.5)'}>
            <Container maxW={'3xl'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{base: 8, md: 14}}
                    py={{base: 20, md: 36}}>
                    <Heading
                        color='white'
                        fontWeight={600}
                        fontSize={{base: '5xl', sm: '5xl', md: '6xl'}}>
                        Hack the MIST
                    </Heading>
                    <Heading
                        color={'white'}
                        fontSize={{base: '1xl'}}
                        style={{marginTop: '0'}}>
                        Spring 2022 @ University of Toronto | Presented by UTMIST
                    </Heading>
                    <Text color={'gray.200'}>
                        "we really like niagara falls, so that's why we started this hackathon"
                    </Text>
                    <Text color={'gray.200'}>
                        (embed mailchimp integration here)
                    </Text>
                    <Stack
                        direction={'column'}
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