import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TimeLine from './components/TimeLine';

const d = new Date()
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

const dd = new Date()

export default function App() {
    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

const d = new Date()

const present = [
        {"name": "year", "value": d.getFullYear()},
        {"name": "month", "value": d.toLocaleString('en-US', {month: 'short'}).toUpperCase()},
        {"name": "day", "value": String(d.getDate()).padStart(2, '0')},
        {"name": "hour", "value": String(d.getHours()).padStart(2, '0')},
        {"name": "min", "value": String(d.getMinutes()).padStart(2, '0')},
        {"name": "sec", "value": String(d.getSeconds()).padStart(2, '0')},
    ]

return (
    <AppStyle>
        <div onClick={() => console.log('test')}>
        <TimeLine color='red' name='destination time' time={time_to}/>
        </div>
        <TimeLine color='green' name='present time' time={present}/>
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
