import * as React from 'react';
import {Container} from '@chakra-ui/react'

const VerticalCenter = (child: any) => (
    <Container>
        <Container style={{height: '50%'}}/>

        <Container style={{transform: 'translateY(-50%)'}}>
            {child}
        </Container>
    </Container>
)

export default VerticalCenter;