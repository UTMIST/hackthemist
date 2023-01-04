import {
    Text,
} from '@chakra-ui/react';
import * as React from 'react';
import {useEffect, useState} from "react";
import blueBlob from "../img/blue_blob.svg";

const maxLength = 2000;

const subliminalMessages = [
    'HACK',
    'PYTORCH',
    'COLAB',
    'UTMIST',
    'TORONTO',
];

const generateNextThing = () => {
    if (Math.random() < 0.01) {
        // Pick one of our cool subliminal messages to add
        return subliminalMessages[Math.floor(Math.random() * subliminalMessages.length)]
    }

    return Math.random() > 0.5 ? '1' : '0';
}

const generateInitialSequence = () => {
    let out = '';

    for (let i = 0; i < maxLength; i++) {
        out += generateNextThing()
    }

    return out;
}

const Hacker = ({style}: { style: any }) => {


    const initialSequence = generateInitialSequence();
    const [text, setText] = useState(initialSequence);

    useEffect(() => {
        let buffer = initialSequence;

        const clock = setInterval(() => {
            buffer += generateNextThing();

            setText(buffer.substr(buffer.length - maxLength, maxLength));
        }, 100);
        return () => clearInterval(clock);
    }, [initialSequence]);

    return (
        <Text style={{...style, background: `url(${blueBlob})`}} className="backgroundGraphic hacker" fontFamily={"Courier New"}>
            {text}
        </Text>
    )
}

export default Hacker;