import React, { useState } from 'react';
import IPInput from './components/IPInput';
import VideoStream from './components/VideoStream';
import './App.css';

function App() {
    const [showVideoStream, setShowVideoStream] = useState(false);

    const handleShowVideoStream = () => {
        setShowVideoStream(true);
    };

    return (
        <div className="app">
            <h1 className="title">Automatic Surveillance System</h1>
            {showVideoStream ? <VideoStream /> : <IPInput onSubmit={handleShowVideoStream} />}
        </div>
    );
}

export default App;
