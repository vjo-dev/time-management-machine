import React from 'react';
import styled from 'styled-components';
import TimeLine from './components/TimeLine';
import Present from './features/present/Present';

const time_to = [
        {"name": "year", "value": "1955"},
        {"name": "month", "value": "NOV"},
        {"name": "day", "value": "05"},
        {"name": "hour", "value": "01"},
        {"name": "min", "value": "22"},
        {"name": "sec", "value": "00"},
    ]
const time_from = [
        {"name": "year", "value": "1885"},
        {"name": "month", "value": "DEC"},
        {"name": "day", "value": "07"},
        {"name": "hour", "value": "08"},
        {"name": "min", "value": "00"},
        {"name": "sec", "value": "00"},
    ]

export default function App() {


return (
    <AppStyle>
        <div onClick={() => console.log('test')}>
        <TimeLine color='red' name='destination time' time={time_to}/>
        </div>
		<Present />
        <TimeLine color='yellow' name='last time departed' time={time_from}/>
    </AppStyle>
);
}

const AppStyle = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: black;

`;
