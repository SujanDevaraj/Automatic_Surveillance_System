import React, { useState } from 'react';
import './IPInput.css';

function IPInput({ onSubmit }) {
    const [ip1, setIp1] = useState('');
    const [ip2, setIp2] = useState('');

    const handleSaveIPs = () => {
        if (ip1) localStorage.setItem('ip1', ip1);
        if (ip2) localStorage.setItem('ip2', ip2);

        if (ip1 || ip2) {
            onSubmit(); // This triggers the display of VideoStream component
        } else {
            alert('Please enter at least one IP address.');
        }
    };

    return (
        <div className="container">
            <h1>Enter IP Addresses</h1>
            <input
                type="text"
                value={ip1}
                onChange={(e) => setIp1(e.target.value)}
                placeholder="Enter IP Address 1 (pi 4)"
            />
            <input
                type="text"
                value={ip2}
                onChange={(e) => setIp2(e.target.value)}
                placeholder="Enter IP Address 2 (pi zero 2w)"
            />
            <button onClick={handleSaveIPs}>Submit</button>
        </div>
    );
}

export default IPInput;
