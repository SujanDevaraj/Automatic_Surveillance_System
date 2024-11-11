import React, { useState } from 'react';

function Home() {
  const [ip1, setIp1] = useState('');
  const [ip2, setIp2] = useState('');

  const saveIPs = () => {
    if (ip1) localStorage.setItem('ip1', ip1);
    if (ip2) localStorage.setItem('ip2', ip2);

    if (ip1 || ip2) {
      window.location.href = '/stream';
    } else {
      alert('Please enter at least one IP address.');
    }
  };

  return (
    <div style={styles.body}>
      <h1 id="title" style={styles.title}>Automatic Surveillance System</h1>
      <div style={styles.container}>
        <h1>Enter IP Addresses</h1>
        <input
          type="text"
          value={ip1}
          onChange={(e) => setIp1(e.target.value)}
          placeholder="Enter IP Address 1 (pi 4)"
          style={styles.input}
        />
        <input
          type="text"
          value={ip2}
          onChange={(e) => setIp2(e.target.value)}
          placeholder="Enter IP Address 2 (pi zero 2w)"
          style={styles.input}
        />
        <button onClick={saveIPs} style={styles.button}>Submit</button>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    gap: '50px',
    margin: '0',
  },
  title: {
    fontSize: '40px',
  },
  container: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '40px',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  input: {
    width: '93%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    width: '100%',
  },
};

export default Home;
