

import * as React from 'react';
import {Container, Box, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Heading, Stack} from '@chakra-ui/react';

const Component = () => (
    <Container id="faq" maxW={'3xl'}>
        <Stack
            as={Box}
            spacing={{base: 8, md: 14}}
            pt={{base: 20, md: 28}}>
            <Heading className="heading"> FAQ</Heading>

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
                        <b>What if I have no experience? Can I still come?</b>
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
                        <b>How can I participate in Hack the MIST</b>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    The registration form will be out early next year. While applying, just by showing enthusiasm for machine learning will get you a spot in Hack the MIST! But note that we are accepting registration on a first come first serve basis and the spots are limited. So make sure to secure yours before they run out!  
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
                        <b>Where is the hackathon? Will it be in-person?</b>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    Yes, the hackathon will be in-person at the University of Toronto.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        <b>Will there be prizes for the winners?</b>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    Yes! The prizes will be announced closer to the Hack the MIST date.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Stack>
    </Container>
);

export default Component;