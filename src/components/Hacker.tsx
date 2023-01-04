import {
    Text,
} from '@chakra-ui/react';
import * as React from 'react';
import {useEffect, useState} from "react";

const Hacker = ({style}: { style: any }) => {
    const [text, setText] = useState('');

    useEffect(() => {
        const clock = setInterval(() => {
            setText('hi')
        }, 50);
        return () => clearInterval(clock);
    }, []);

    return (
        <Text style={style} className="backgroundGraphic" fontFamily={"Courier New"}>
            {text}asdasd
        </Text>
    )
}

export default Hacker;