

import * as React from 'react';
import {Container, Box, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Heading, Stack} from '@chakra-ui/react';

const Component = () => (
    <Container id="faq" maxW={'3xl'}>
        <Stack
            as={Box}
            spacing={{base: 8, md: 14}}
            py={{base: 20, md: 36}}>
            <Heading>FAQ</Heading>

            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        <b>What is a hackathon?</b>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    A hackathon is a social event where developers, designers, and any solution-solvers collaborate to identify and solve a problem.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        <b>Who can join?</b>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    High school and undergraduate students with any coding/designing background.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        <b>I don't have a team, what do I do?</b>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    No worries! You can submit your application as an individual and you can find teammates in the #team-formation channel on our Hack the MIST Discord later. You will get to join Discord after being accepted.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        <b>How do I apply with a team?</b>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    Each individual has to submit their own application. We will share a form after the hackathon starts, and you can declare your team then.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        <b>If I have no experience, can I still come?</b>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    This hackathon is open to people with all Machine Learning backgrounds. If you are a beginner in machine learning and looking for a platform to build your first machine learning project this can be a great opportunity for you. 
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        <b>How much does it cost to participate?</b>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    It's completely free! Just bring your laptop and your passion.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        <b>When is the deadline to apply?</b>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    TBD
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        <b>What is the minimum and maximum size of a team?</b>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    You need to have at least 2 members in your team and at most 4 members. If you lack members, you can find teammates in the #team-formation channel on our Hack the MIST Discord later. You will get to join Discord after being accepted.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        <b>Is this hackathon in-person?</b>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    Yes, this hackathon will be hosted completely in-person at the University of Toronto.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        <b>Do we need to have any hardware/software to participate?</b>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    Yes! They will be announced closer to Hack the MIST date.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Stack>
    </Container>
);

export default Component;