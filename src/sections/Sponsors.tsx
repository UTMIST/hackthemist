import React from 'react';
import {
    Container,
    Stack,
    Heading,
    Text,
    Link,
    Highlight
} from '@chakra-ui/react';

const Sponsors = () => {
    return (
        <Container id="sponsors" maxW={'3xl'}>
            <Stack pb={20} gap={4}>
                <Heading>Sponsors</Heading>
                <Text>Interested in sponsoring us? Get in touch with our team at&nbsp;
                    <Link textDecor={'underline'} href="utmist.outreach@gmail.com">
                        utmist.outreach@gmail.com
                    </Link>
                </Text>
            </Stack>
        </Container>
    )
}

export default Sponsors;