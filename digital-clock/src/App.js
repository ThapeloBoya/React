import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  const [is24HourFormat, setIs24HourFormat] = useState(true);
  const [theme, setTheme] = useState('light');
  
  // Function to format time in 12-hour or 24-hour format
  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = "";

    if (!is24HourFormat) {
      // Convert 24-hour format to 12-hour format
      ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // The hour '0' should be '12' for 12-hour format
    }

    // Pad single digits with a leading zero
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${hours}:${minutes}:${seconds} ${ampm}`.trim();
  };

  const formatDate = (date) => {
    // Display the date in a readable format
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  // Update the time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  // Toggle between 12-hour and 24-hour formats
  const toggleTimeFormat = () => {
    setIs24HourFormat(!is24HourFormat);
  };

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div style={{ ...styles.container, backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h1 style={styles.clock}>{formatTime(time)}</h1>
      <p style={styles.date}>{formatDate(time)}</p>
      <div style={styles.controls}>
        <button style={styles.button} onClick={toggleTimeFormat}>
          Toggle {is24HourFormat ? "12-Hour" : "24-Hour"} Format
        </button>
        <button style={styles.button} onClick={toggleTheme}>
          Toggle {theme === 'light' ? "Dark" : "Light"} Mode
        </button>
      </div>
      <footer className="App-footer">
        <p>© 2024 Wecode. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Simple styles for the clock
const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border:'3px solid red',
  },
  clock: {
    fontSize: '60px',
    margin: '20px 0',
  },
  date: {
    fontSize: '24px',
    margin: '10px 0',
  },
  controls: {
    marginTop: '20px',
  },
  button: {
    fontSize: '16px',
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    margin: '10px',
  }

};

export default DigitalClock;
