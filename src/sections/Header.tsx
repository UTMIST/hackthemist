import * as React from 'react';
import {Container, Stack, Box, Heading, Button, Text} from '@chakra-ui/react'
import {scrollToSection} from "../util/scroll";

const Component = () => (
    <Box style={{width: '100vw'}} background={'pink'}>
        <Container maxW={'3xl'}>
            <Stack
                as={Box}
                textAlign={'center'}
                spacing={{base: 8, md: 14}}
                py={{base: 20, md: 36}}>
                <Heading
                    fontWeight={600}
                    fontSize={{base: '5xl', sm: '5xl', md: '6xl'}}>
                    Hack the MIST
                </Heading>
                <Heading
                    fontSize={{base: '1m'}}
                    style={{marginTop: '0'}}>
                    Spring 2022 @ University of Toronto
                </Heading>
                <Text color={'gray.500'}>
                    We really like to make money, so we started this club
                </Text>
                <Text color={'gray.500'}>
                    (embed mailchimp integration here)
                </Text>
                <Stack
                    direction={'column'}
                    spacing={3}
                    align={'center'}
                    alignSelf={'center'}
                    position={'relative'}>
                    <Button
                        colorScheme={'green'}
                        bg={'green.400'}
                        rounded={'full'}
                        px={6}
                        _hover={{
                            bg: 'green.500',
                        }}
                    onClick={() => scrollToSection('#about-us')}>
                        Learn More
                    </Button>
                </Stack>
            </Stack>
        </Container>
    </Box>
);

export default Component;