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
    Center
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
            <Stack pb={20} gap={4}>
                <Heading>Contact Us</Heading>
                <Text as={'b'}>Feel free to reach out via email or visit our social media!</Text>
                <Flex gap={6}>
                    <Button
                        colorScheme={'blue'}
                        bg={'blue.600'}
                        rounded={'full'}
                        px={6}
                        _hover={{
                            bg: 'blue.500',
                        }}
                        onClick={() => window.open('https://eepurl.com/dGMddD', '_blank')}>

                        <Icon
                            as={EmailIcon}
                            w={6}
                            h={6}
                            style={{ marginRight: '10px' }}
                        />
                        Join our mailing list
                    </Button>
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
            </Stack>
        </Container>
    );
}

export default Contact;