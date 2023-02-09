import * as React from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import dayOne from '../img/day_one.svg';
import dayTwo from '../img/day_two.svg';

const Schedule = () => {
    return (
        <Box
            width='100%'
            marginTop='200px'
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
                            <Text>9:00 AM (Bahen Atrium)</Text>
                            <Text>10:00 AM (BA 1130)</Text>
                            <Text>11:00 AM</Text>
                            <Text>12:00 PM (Bahen Atrium)</Text>
                            <Text>1:00 PM - 2:00 PM (BA 1200 & 1230)</Text>
                            <Text>4:00 PM - 5:00 PM</Text>
                        </Box>
                        <Box display='flex' flexDirection='column' alignItems='left' gap='30px'>
                            <Text>Check-In</Text>
                            <Text>Opening Ceremony</Text>
                            <Text>Hacking Begins!</Text>
                            <Text>Lunch</Text>
                            <Text>Workshops</Text>
                            <Text>Internal Career Fair</Text>
                        </Box>
                    </Box>
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center'>
                    <Image src={dayTwo} width='210px' height='210px' />
                    <Box display='flex' flexDirection='row' alignItems='center' gap='50px' marginTop='50px'>
                        <Box display='flex' flexDirection='column' alignItems='left' gap='30px'>
                            <Text>12:00 PM - 1:00 PM (Bahen Atrium)</Text>
                            <Text>2:00 PM - 3:00 PM (BA 1170)</Text>
                            <Text>4:00 PM</Text>
                            <Text>4:00 PM - 5:00 PM (Bahen Atrium)</Text>
                            <Text>5:00 PM - 6:00 PM (BA 1130)</Text>
                        </Box>
                        <Box display='flex' flexDirection='column' alignItems='left' gap='30px'>
                            <Text>Lunch</Text>
                            <Text>Sponsor Technical Workshop</Text>
                            <Text>Hacking Ends!</Text>
                            <Text>Networking and Discussion</Text>
                            <Text>Closing Ceremony</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Schedule;
