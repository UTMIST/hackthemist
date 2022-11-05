import * as React from 'react';
import {Container, Stack, Box, Heading, Button, Text} from '@chakra-ui/react'

const Header = () => (
    <Container maxW={'3xl'}>
        <Stack
            as={Box}
            textAlign={'center'}
            spacing={{base: 8, md: 14}}
            py={{base: 20, md: 36}}>
            <Heading
                fontWeight={600}
                fontSize={{base: '2xl', sm: '4xl', md: '6xl'}}
                lineHeight={'110%'}>
                Hack the MIST
            </Heading>
            <Text color={'gray.500'}>
                We really like to make money, so we started this club
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
                    }}>
                    Get Started
                </Button>
                <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
                    Learn more
                </Button>
            </Stack>
        </Stack>
    </Container>
)

export default Header;