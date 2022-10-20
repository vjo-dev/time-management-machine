import React, { useEffect, useState } from 'react';
import TimeLine from '../../components/TimeLine';

export default function Present() {
    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

const date = new Date()
const present = [
        {"name": "year", "value": date.getFullYear()},
        {"name": "month", "value": date.toLocaleString('en-US', {month: 'short'}).toUpperCase()},
        {"name": "day", "value": String(date.getDate()).padStart(2, '0')},
        {"name": "hour", "value": String(date.getHours()).padStart(2, '0')},
        {"name": "min", "value": String(date.getMinutes()).padStart(2, '0')},
        {"name": "sec", "value": String(date.getSeconds()).padStart(2, '0')},
    ]

	return(
        <TimeLine color='green' name='present time' time={present} />
	);
}
