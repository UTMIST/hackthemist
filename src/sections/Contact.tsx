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
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter
} from 'react-icons/fa'

const Contact = () => {
    const socialData = [
        {
            aria: 'Email',
            icon: <FaEnvelope />,
            href: 'mailto:utorontomist@gmail.com'
        },
        {
            aria: 'Facebook',
            icon: <FaFacebook />,
            href: 'https://www.facebook.com/UofT.MIST'
        },
        {
            aria: 'Instagram',
            icon: <FaInstagram />,
            href: 'https://instagram.com/uoft_utmist'
        },
        {
            aria: 'LinkedIn',
            icon: <FaLinkedin />,
            href: 'https://linkedin.com/company/utmist'
        },
        {
            aria: 'Twitter',
            icon: <FaTwitter />,
            href: 'https://twitter.com/UTMIST1'
        }
    ]

    return (
        <Container id="contact-us" maxW={'3xl'}>
            <Stack
                as={Box}
                spacing={{base: 8, md: 14}}
                py={{base: 20, md: 24}}>
                <Heading className="heading"> Contact Us</Heading>
                <Text as={'b'}>Feel free to reach out via email or visit our social media!</Text>
                <Stack direction={['column', 'row']} gap={{ base: 4, sm: 0 }}>
                    <Button
                        colorScheme={'blue'}
                        bg={'blue.600'}
                        rounded={'full'}
                        px={6}
                        mr={5}
                        _hover={{
                            bg: 'blue.500',
                        }}
                        onClick={() => window.open('https://eepurl.com/dGMddD', '_blank')}
                    >
                        <Icon
                            as={EmailIcon}
                            w={6}
                            h={6}
                            style={{ marginRight: '10px' }}
                        />
                        Join our mailing list
                    </Button>
                    <Center>
                        <Flex gap={6}>
                            {
                                socialData.map(social => (
                                    <Center>
                                        <Link
                                            aria-label={social.aria}
                                            href={social.href}
                                            fontSize={20}
                                            isExternal>
                                            {social.icon}
                                        </Link>
                                    </Center>
                                ))
                            }
                        </Flex>
                    </Center>
                </Stack>
            </Stack>
        </Container>
    );
}

export default Contact;