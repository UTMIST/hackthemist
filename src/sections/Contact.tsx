import React from 'react';
import {
    Container,
    Flex,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    Link,
    Center,
    Box
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import {
    FiMail,
    FiFacebook,
    FiInstagram,
    FiLinkedin,
    FiTwitter
} from 'react-icons/fi'

const Contact = () => {
    const socialData = [
        {
            aria: 'Email',
            icon: <FiMail />,
            href: 'mailto:utorontomist@gmail.com'
        },
        {
            aria: 'Facebook',
            icon: <FiFacebook />,
            href: 'https://www.facebook.com/UofT.MIST'
        },
        {
            aria: 'Instagram',
            icon: <FiInstagram />,
            href: 'https://instagram.com/uoft_utmist'
        },
        {
            aria: 'LinkedIn',
            icon: <FiLinkedin />,
            href: 'https://linkedin.com/company/utmist'
        },
        {
            aria: 'Twitter',
            icon: <FiTwitter />,
            href: 'https://twitter.com/UTMIST1'
        }
    ]

    return (
        <Container id="contact-us" maxW={'3xl'}>
            <Stack
                as={Box}
                spacing={{base: 6, md: 5}}
                py={{base: 20, md: 24}}
            >
                <Heading className="heading">Contact Us</Heading>
                <Text as={'b'} fontSize={'xl'} align={'center'}>Feel free to reach out via email or visit our social media!</Text>
                <Center>                
                    <Stack direction={['column', 'row']} gap={{ base: 4, sm: 0 }}>
                        <Button
                            bg={'button'}
                            rounded={'full'}
                            px={6}
                            mr={{ base: 0, sm: 5}}
                            _hover={{
                                bg: 'button_hover',
                            }}
                            _active={{
                                bg: 'button_pressed',
                            }}
                            onClick={() => window.open('https://eepurl.com/dGMddD', '_blank')}
                        >
                            Join Our Mailing List
                        </Button>
                        <Flex gap={6}>
                            {
                                socialData.map(social => (
                                    <Center>
                                        <Link
                                            aria-label={social.aria}
                                            href={social.href}
                                            fontSize={24}
                                            isExternal>
                                            {social.icon}
                                        </Link>
                                    </Center>
                                ))
                            }
                        </Flex>
                    </Stack>
                </Center>
            </Stack>
        </Container>
    );
}

export default Contact;