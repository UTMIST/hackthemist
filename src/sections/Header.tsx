import * as React from 'react';
import {Container, Stack, Box, Heading, Button, Text, Icon, Image, Center} from '@chakra-ui/react'
import {scrollToSection} from "../util/scroll";
import Hacker from "../components/Hacker";
import headerLogo from '../img/header_logo.svg';
import {
    EmailIcon,
} from '@chakra-ui/icons';
import blueBlob from "../img/blue_blob.svg";

const Component = () => (
    <Container maxW={'3xl'}>
        <div className='backgroundGraphicParent'>
            <Hacker style={{right: 0, top: '500px', zIndex: -1, textAlign: 'right'}}/>
            <Image src={blueBlob} className="backgroundGraphic" style={{right: '-5%', marginTop: '300px'}}/>
        </div>
        <Stack
            as={Box}
            textAlign={'center'}
            spacing={{base: 8, md: 14}}
            py={{base: 20, md: 36}}
            style={{paddingTop: '200px', paddingBottom: '200px'}}>

            <Heading
                color={'white'}
                fontSize={{base: '1xl'}}
                style={{marginTop: '0'}}>
                Spring 2022 @ University of Toronto | Presented by UTMIST
            </Heading>
            <Center>
                <Image src={headerLogo} className="headerlogo"/>
            </Center>
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
                    bg={'button'}
                    rounded={'full'}
                    px={6}
                    _hover={{
                        bg: 'button_hover',
                    }}
                    _active={{
                        bg: 'button_pressed',
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
                    bg={'button'}
                    rounded={'full'}
                    px={6}
                    _hover={{
                        bg: 'button_hover',
                    }}
                    _active={{
                        bg: 'button_pressed',
                    }}
                    onClick={() => scrollToSection('#about-us')}>
                    Learn More
                </Button>
            </Stack>
        </Stack>
    </Container>
);

export default Component;
