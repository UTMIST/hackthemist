import * as React from 'react';
import { Box, Heading, Image, Text, Grid, GridItem } from '@chakra-ui/react';
import dayOne from '../img/day_one.svg';
import dayTwo from '../img/day_two.svg';

const Schedule = () => {
    return (
        <Box id='schedule'
            pt={{base: 20, md: 28}}
            width='100%'
            display='flex'
            flexDirection='column'
            alignItems='center'
            paddingLeft='20px'
            paddingRight='20px'
        >
            <Heading className='heading'>Event Schedule</Heading>
            <Box
                marginTop='115px'
                display='flex'
                flexDirection={{ base: 'column', lg: 'row' }}
                alignItems='top'
                gap={{ base: '150px', lg: '200px' }}
            >
                <Box display='flex' flexDirection='column' alignItems='center'>
                    <Image src={dayOne} width='210px' height='210px' />
                    <Box display='flex' flexDirection='row' alignItems='center' gap='50px' marginTop='50px'>
                        <Box display='flex' flexDirection='column' alignItems='left' gap='30px'>
                            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                                <GridItem>
                                    <Text>9:30 AM (Bahen Atrium)</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Check-In</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>10:00 AM (BA 1130)</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Opening Ceremony</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>11:00 AM</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Hacking Begins!</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>11:30 PM (Bahen Atrium)</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Lunch</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>12:00 PM - 1:00 PM (BA 1200)</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Workshop: Intro to NLP 1: Data Cleaning & Jupyter Hub</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>1:00 PM - 2:00 PM (BA 1200)</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Workshop: Intro to NLP 2: Applications with Cohere</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>2:00 PM - 3:00 PM (BA 1230)</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Workshop: Building a Reinforcement Learning Model</Text>
                                </GridItem>
                            </Grid>
                        </Box>                                                                                                                     
                    </Box>
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center'>
                    <Image src={dayTwo} width='210px' height='210px' />
                    <Box display='flex' flexDirection='row' alignItems='center' gap='50px' marginTop='50px'>
                        <Box display='flex' flexDirection='column' alignItems='left' gap='30px'>
                            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                                <GridItem>
                                    <Text>12:00 PM - 1:00 PM (Bahen Atrium)</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Lunch</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>2:00 PM - 3:00 PM (BA 1170)</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Machine Learning Career Panel</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>4:00 PM</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Hacking Ends!</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>4:30 PM - 5:30 PM (Bahen Atrium)</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Presentations & Networking</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>5:30 PM - 6:15 PM (BA 1130)</Text>
                                </GridItem>
                                <GridItem>
                                    <Text>Closing Ceremony</Text>
                                </GridItem>
                            </Grid>
                        </Box>                                                     
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Schedule;
