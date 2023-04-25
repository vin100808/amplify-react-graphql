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
      <h1 style={textStyle}>Hello, world!</h1>
      <p>This is a sample React app with a rounded background.</p>
    </div>
  );
}

export default App;
