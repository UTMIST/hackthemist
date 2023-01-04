import * as React from 'react';
import {Container, Grid, GridItem, Heading, Stack, Box, Image, Text, Show, Hide} from '@chakra-ui/react'
import boredPeople from '../img/bored_people.jpeg';
import speaker from '../img/speaker.jpg';

const Component = () => (
    <Container id="about-us" maxW={'3xl'}>
        <Stack
            as={Box}
            spacing={{base: 8, md: 14}}
            pt={{base: 20, md: 28}}>
            <Heading className="heading">About Us</Heading>

            <Text>
                Hack the MIST is the first hackathon at the University of Toronto
                that <b>focuses on developing an end to end solution on real world
                problems with machine learning</b>.
            </Text>
            <Grid templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)'
            }} gap={6}>
                <Hide breakpoint='(max-width: 767px)'>
                    <GridItem w='100%'>
                        <Image src={boredPeople} className="outline zoom circle"/>
                    </GridItem>
                </Hide>

                <GridItem w='100%'>
                    <Box className="spacer"/>
                    <Text className="verticalCenter">
                        The solutions from this hackathon
                        will be more than coding in a Jupyter notebook, but will instead
                        be solutions that can be implemented in the real world.
                    </Text>
                </GridItem>

                <GridItem w='100%'>
                    <Box className="spacer"/>
                    <Text className="verticalCenter">
                        This will be an all-inclusive hackathon where we invite hackers
                        from all backgrounds. Our goal is to educate ML developers on
                        building full ML pipelines for real-world applications, which is
                        not something that is taught in university courses.
                    </Text>
                </GridItem>
                <Hide breakpoint='(max-width: 767px)'>
                    <GridItem w='100%'>
                        <Image src={speaker} className="outline zoom circle"/>
                    </GridItem>
                </Hide>
            </Grid>

            <Text>
                This will make
                an impact as we will bring solutions developed by some of the
                brightest minds to difficult problems.
            </Text>


            <Show breakpoint='(max-width: 767px)'>
                <GridItem w='100%'>
                    <Image src={speaker} className="outline zoom circle"/>
                </GridItem>
            </Show>
        </Stack>
    </Container>
);

export default Component;