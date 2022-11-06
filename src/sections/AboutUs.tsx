import * as React from 'react';
import {Container, Grid, GridItem, Heading, Stack, Box, Image, Text, Show, Hide} from '@chakra-ui/react'
import boredPeople from '../img/bored_people.jpeg';
import speaker from '../img/speaker.jpg';

const Component = () => (
    <Container id="about-us" maxW={'3xl'}>
        <Stack
            as={Box}
            spacing={{base: 8, md: 14}}
            py={{base: 20, md: 36}}>
            <Heading>About Us</Heading>
            <Grid templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)'
            }} gap={6}>
                <GridItem w='100%'>
                    <Box className="spacer" />
                    <Text className="verticalCenter">
                        Hack the MIST is the first hackathon at the University of Toronto
                        that <b>focuses on developing an end to end solution on real world
                        problems with machine learning</b>.
                        <br/><br/>
                        The solutions from this hackathon
                        will be more than coding in a Jupyter notebook, but will instead
                        be solutions that can be implemented in the real world.
                    </Text>
                </GridItem>

                <Hide breakpoint='(max-width: 767px)'>
                    <GridItem w='100%'>
                        <Image src={boredPeople} className="shadow zoom"/>
                    </GridItem>
                    <GridItem w='100%'>
                        <Image src={speaker} className="shadow zoom"/>
                    </GridItem>
                </Hide>

                <GridItem w='100%'>
                    <Box className="spacer" />
                    <Text className="verticalCenter">
                        This will be an all-inclusive hackathon where we invite hackers
                        from all backgrounds. Our goal is to educate ML developers on
                        building full ML pipelines for real-world applications, which is
                        not something that is taught in university courses.
                        <br/><br/>
                        This will make
                        an impact as we will bring solutions developed by some of the
                        brightest minds to difficult problems.
                    </Text>
                </GridItem>

                <Show breakpoint='(max-width: 767px)'>
                    <GridItem w='100%'>
                        <Image src={speaker} className="shadow zoom"/>
                    </GridItem>
                </Show>
            </Grid>
        </Stack>
    </Container>
);

export default Component;