import React from 'react';
import styled from 'styled-components';
import Digits from './Digits';

export default function TimeLine({
    name = "destination time",
    color = "white",
    time = [
        {"name": "year", "value": "1985"},
        {"name": "month", "value": "OCT"},
        {"name": "day", "value": "26"},
        {"name": "hour", "value": "01"},
        {"name": "min", "value": "21"},
        {"name": "sec", "value": "00"},
    ]
})
{

// const year = d.getFullYear()
// const month = d.toLocaleString('en-US', {month: 'short'}).toUpperCase()
// const day = String(d.getDate()).padStart(2, '0');
// const hours = String(d.getHours()).padStart(2, '0');
// const minutes = String(d.getMinutes()).padStart(2, '0');
// const seconds = String(d.getSeconds()).padStart(2, '0');

    const Cadran = ({name, text, color}) => {
        return <CadranStyle>
            <div className='cadran-name'>{name}</div>
            <Digits text={text} color={color}/>
        </CadranStyle>
    }

    return(
        <TimeLineStyle>
            <div className='time-line-section'>
                {time.map((item, index) => <Cadran key={index} name={item.name} text={item.value} color={color}/>)}
            </div>
            <div className='time-name-section'>
                <div className='time-name'>{name}</div>
            </div>
        </TimeLineStyle>
    );
}


const CadranStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    .cadran-name {
        font-family: 'ruban';
        font-size: 1.5rem;
        background: white;
        color: darkred;
    }
`;

const TimeLineStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid black;
    padding: 1rem;
    width: fit-content;
    background: gray;

    .time-name-section {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
    }

    .time-name {
        font-family: 'Consolas';
        font-size: 2rem;
        font-weight: 900;
        padding 0 1rem;
        width: fit-content;
        background: black;
        color: white;
        text-transform: uppercase;
    }

    .time-line-section {
        display: flex;
        flex-direction: row;
        gap: 2rem;
    }
`;
