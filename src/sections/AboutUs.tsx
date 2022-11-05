import * as React from 'react';
import {Container, Grid, GridItem, Heading, Stack, Box, Image, Text} from '@chakra-ui/react'
import audience from '../img/audience.jpg';
import speaker from '../img/speaker.jpg';
import VerticalCenter from '../components/VerticalCenter'

const Header = () => (
    <Container maxW={'3xl'}>

        <Stack
            as={Box}
            spacing={{base: 8, md: 14}}
            py={{base: 20, md: 36}}>
            <Heading>About Us</Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%'>
                    <VerticalCenter>
                        <Text>
                            Hack the MIST is the first hackathon at the University of Toronto
                            that <b>focuses on developing an end to end solution on real world
                            problems with machine learning</b>. The solutions from this hackathon
                            will be more than coding in a Jupyter notebook, but will instead
                            be solutions that can be implemented in the real world.
                        </Text>
                    </VerticalCenter>
                </GridItem>

                <GridItem w='100%'>
                    <Image src={audience}/>
                </GridItem>

                <GridItem w='100%'>
                    <Image src={speaker}/>
                </GridItem>

                <GridItem w='100%'>
                    <Text>
                        This will be an all-inclusive hackathon where we invite hackers
                        from all backgrounds. Our goal is to educate ML developers on
                        building full ML pipelines for real-world applications, which is
                        not something that is taught in university courses. This will make
                        an impact as we will bring solutions developed by some of the
                        brightest minds to difficult problems.
                    </Text>
                </GridItem>
            </Grid>
        </Stack>
    </Container>
)

export default Header;