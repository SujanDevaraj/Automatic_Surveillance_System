import React, { useEffect, useState } from 'react';

function Stream() {
  const [ip1, setIp1] = useState(null);
  const [ip2, setIp2] = useState(null);

  useEffect(() => {
    const storedIp1 = localStorage.getItem('ip1');
    const storedIp2 = localStorage.getItem('ip2');

    if (storedIp1) setIp1(storedIp1);
    if (storedIp2) setIp2(storedIp2);

    if (!storedIp1 && !storedIp2) {
      alert('IP addresses not found. Please enter them again.');
      window.location.href = '/';
    }
  }, []);

  const refreshFeed = (feedId) => {
    const iframe = document.getElementById(feedId);
    iframe.src = iframe.src;
  };

  return (
    <div style={styles.body}>
      <div id="live" style={styles.live}>
        <h1>Livestream Viewer</h1>
        <button className="nav-button" style={styles.button} onClick={() => window.location.href = '/'}>Enter IP Addresses</button>
      </div>
      <div style={styles.videoWrapper}>
        {ip1 && (
          <div id="videoContainer1" style={styles.videoContainer}>
            <h2>Video Feed 1</h2>
            <iframe
              id="videoFeed1"
              style={styles.videoFeed}
              src={`/api/proxy?ip=${ip1}&port=5000/video_feed`}
              allowFullScreen
            ></iframe>
            <button className="refresh-button" style={styles.button} onClick={() => refreshFeed('videoFeed1')}>Refresh Video Feed 1</button>
          </div>
        )}
        {ip2 && (
          <div id="videoContainer2" style={styles.videoContainer}>
            <h2>Video Feed 2</h2>
            <iframe
              id="videoFeed2"
              style={styles.videoFeed}
              src={`/api/proxy?ip=${ip2}&port=8080/`}
              allowFullScreen
            ></iframe>
            <button className="refresh-button" style={styles.button} onClick={() => refreshFeed('videoFeed2')}>Refresh Video Feed 2</button>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    margin: '0',
  },
  live: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '30px',
    width: '100%',
    height: '50px',
  },
  videoWrapper: {
    display: 'flex',
    gap: '20px',
    marginTop: '0px',
    width: '100%',
    maxWidth: '1600px',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  videoContainer: {
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '48%',
    textAlign: 'center',
  },
  videoFeed: {
    width: '89%',
    height: '480px',
    borderRadius: '4px',
    border: '2px solid #ddd',
    marginBottom: '10px',
  },
  button: {
    marginTop: '5px',
    padding: '8px 16px',
    fontSize: '14px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};

export default Stream;
