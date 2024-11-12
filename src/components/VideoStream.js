import React, { useEffect, useState } from 'react';
import './VideoStream.css';

function VideoStream() {
    const [ip1, setIp1] = useState(null);
    const [ip2, setIp2] = useState(null);

    useEffect(() => {
        const savedIp1 = localStorage.getItem('ip1');
        const savedIp2 = localStorage.getItem('ip2');

        if (savedIp1) setIp1(savedIp1);
        if (savedIp2) setIp2(savedIp2);

        // If no IPs found, redirect to input
        if (!savedIp1 && !savedIp2) {
            alert('Please enter at least one IP address.');
            window.location.reload();
        }
    }, []);

    const refreshFeed = (feedId) => {
        const iframe = document.getElementById(feedId);
        iframe.src = iframe.src; // Reloads the iframe content
    };

    return (
        <div>
            <div className="header">
                <h1>Livestream Viewer</h1>
                <button className="nav-button" onClick={() => window.location.reload()}>
                    Enter IP Addresses
                </button>
            </div>
            <div className="video-wrapper">
                {ip1 ? (
                    <div className="video-container">
                        <h2>Video Feed 1</h2>
                        <iframe id="videoFeed1" className="video-feed" src={`http://${ip1}:5000/video_feed`} allowFullScreen />
                        <button className="refresh-button" onClick={() => refreshFeed('videoFeed1')}>
                            Refresh Video Feed 1
                        </button>
                    </div>
                ) : (
                    <p>Please enter an IP address for Video Feed 1.</p>
                )}
                {ip2 ? (
                    <div className="video-container">
                        <h2>Video Feed 2</h2>
                        <iframe id="videoFeed2" className="video-feed" src={`http://${ip2}:8080/`} allowFullScreen />
                        <button className="refresh-button" onClick={() => refreshFeed('videoFeed2')}>
                            Refresh Video Feed 2
                        </button>
                    </div>
                ) : (
                    <p>Please enter an IP address for Video Feed 2.</p>
                )}
            </div>
        </div>
    );
}

export default VideoStream;
