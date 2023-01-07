import * as React from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import dayOne from '../img/day_one.svg';
import dayTwo from '../img/day_two.svg';

const Schedule = () => {
    return (
        <Box width='100%' marginTop='200px' display='flex' flexDirection='column' alignItems='center'>
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
                            <Text>9:00 AM - 10:00 AM</Text>
                            <Text>10:00 AM - 11:00 AM</Text>
                            <Text>11:00 AM</Text>
                            <Text>12:00 PM</Text>
                            <Text>1:00 PM - 6:00 PM</Text>
                            <Text>6:00 PM</Text>
                        </Box>
                        <Box display='flex' flexDirection='column' alignItems='left' gap='24px'>
                            <Text fontSize='xl'>Check-In</Text>
                            <Text fontSize='xl'>Opening Ceremony</Text>
                            <Text fontSize='xl'>Hacking Begins!</Text>
                            <Text fontSize='xl'>Lunch</Text>
                            <Text fontSize='xl'>Workshops & Activities</Text>
                            <Text fontSize='xl'>Dinner</Text>
                        </Box>
                    </Box>
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center'>
                    <Image src={dayTwo} width='210px' height='210px' />
                    <Box display='flex' flexDirection='row' alignItems='center' gap='50px' marginTop='50px'>
                        <Box display='flex' flexDirection='column' alignItems='left' gap='30px'>
                            <Text>8:00 AM - 9:00 AM</Text>
                            <Text>11:00 AM - 12:00 PM</Text>
                            <Text>12:00 PM - 1:00 PM</Text>
                            <Text>4:00 PM</Text>
                            <Text>4:00 PM - 5:00 PM</Text>
                            <Text>5:00 PM - 6:00 PM</Text>
                            <Text>6:00 PM - 7:00 PM</Text>
                        </Box>
                        <Box display='flex' flexDirection='column' alignItems='left' gap='24px'>
                            <Text fontSize='xl'>Breakfast</Text>
                            <Text fontSize='xl'>Technical Workshop</Text>
                            <Text fontSize='xl'>Lunch</Text>
                            <Text fontSize='xl'>Hacking Ends!</Text>
                            <Text fontSize='xl'>Hackers' Mixer / Judging</Text>
                            <Text fontSize='xl'>Closing Ceremony</Text>
                            <Text fontSize='xl'>Gala / Networking</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Schedule;
