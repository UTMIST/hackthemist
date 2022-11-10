import React from 'react';
import {
    Container,
    Flex,
    Heading,
    Stack,
    Text,
    Button,
    Icon
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

const Contact = () => {
    return (
        <Container maxW={'3xl'}>
            <Stack pb={20} gap={4}>
                <Heading>Contact Us</Heading>
                <Text as={'b'}>Feel free to reach out through email or visit our social media!</Text>
                <Flex>
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
                </Flex>
            </Stack>
        </Container>
    );
}

export default Contact;