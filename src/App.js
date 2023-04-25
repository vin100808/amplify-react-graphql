import React from 'react';

function App() {
  const containerStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0px 2px 10px #888888',
    padding: '20px',
    margin: '50px auto',
    maxWidth: '600px',
    textAlign: 'center',
  };

  const textStyle = {
    fontSize: '48px',
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={textStyle}>咩咩</h1>
      <p>ily!</p>
    </div>
  );
}

export default App;
