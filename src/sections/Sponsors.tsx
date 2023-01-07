import React from 'react';
import { Container, Stack, Heading, Text, Link, Box, Image } from '@chakra-ui/react';

import redBlob from '../img/red_blob.svg';

const Sponsors = () => {
    return (
        <Container id='sponsors' maxW={'3xl'} marginTop='200px'>
            <div className='backgroundGraphicParent' style={{ zIndex: '-2' }}>
                <Image src={redBlob} className='backgroundGraphic pulse' style={{ right: '20%', maxWidth: '30vw' }} />
            </div>
            <Stack as={Box} spacing={{ base: 8, md: 14 }} pt={{ base: 20, md: 28 }}>
                <Heading className='heading'>Meet Our Sponsors</Heading>
                <Text align='center' paddingBottom='14'>
                    Interested in sponsoring us? Get in touch with our team at&nbsp;
                    <Link textDecor={'underline'} href='mailto:sponsor@utmist.org'>
                        sponsor@utmist.org
                    </Link>
                </Text>
            </Stack>
        </Container>
    );
};

export default Sponsors;
