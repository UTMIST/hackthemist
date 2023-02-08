import * as React from 'react';
import {Container, Stack, Box, Heading, Button, Image, Center} from '@chakra-ui/react'
import Hacker from "../components/Hacker";
import headerLogo from '../img/header_logo.svg';

const Component = () => (
    <Container maxW={'3xl'}>
        <div className='backgroundGraphicParent'>
            <Hacker style={{right: '-10%', top: '200px'}}/>
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
                Spring 2023 @ University of Toronto | Presented by UTMIST
            </Heading>
            <Center>
                <Image src={headerLogo} className="headerlogo"/>
            </Center>
            <Stack
                style={{marginTop: "40px"}}
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
                    onClick={() => window.open('https://airtable.com/shrLynAHMZ1yA1tE9', '_blank')}>
                    Apply as Hacker
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
                    onClick={() => window.open('https://airtable.com/shrwePl8daOVkdv1p', '_blank')}>
                    Apply as Mentor
                </Button>
            </Stack>
        </Stack>
    </Container>
);

export default Component;
