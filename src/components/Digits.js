import React from 'react';
import styled from 'styled-components';

export default function Digits({
    text = '8',
    color = 'red',
}) {
    return(
        <DigitStyle color={color}>{text}</DigitStyle>
    );
}

const DigitStyle = styled.div`
    width: fit-content;
    text-align: center;
    padding: 0.2rem 0.6rem 0.2rem 0.4rem;
    font-family: 'digital-7';
    font-size: 5rem;
    background-color: black;
    border-radius: 4px;
    cursor: default;
    color: ${props => props.color || "red"};
`;
