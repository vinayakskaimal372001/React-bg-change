import React, { useState } from 'react';
import './App.css'; 

function App() {
  
  const [bgColor, setBgColor] = useState('grey');

  const changeBackgroundColor = (color) => {
    setBgColor(color);
  };

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1>Change Background Color</h1>

      <div>
        <button onClick={() => changeBackgroundColor('red')} style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', margin: '10px', fontSize: '16px' }}>
          Red
        </button>
        
        <button onClick={() => changeBackgroundColor('green')} style={{ backgroundColor: 'green',borderRadius: '10px',border:'2px' , color: 'white', padding: '10px 20px', margin: '10px', fontSize: '16px' }}>
          Green
        </button>

        <button onClick={() => changeBackgroundColor('blue')} style={{ backgroundColor: 'blue', borderRadius: '10px',border:'2px' ,color: 'white', padding: '10px 20px', margin: '10px', fontSize: '16px' }}>
          Blue
        </button>

        <button onClick={() => changeBackgroundColor('yellow')} style={{ backgroundColor: 'yellow',borderRadius: '10px',border:'2px' , color: 'black', padding: '10px 20px', margin: '10px', fontSize: '16px' }}>
          Yellow
        </button>

        <button onClick={() => changeBackgroundColor('purple')} style={{ backgroundColor: 'purple',borderRadius: '10px',border:'2px' , color: 'white', padding: '10px 20px', margin: '10px', fontSize: '16px' }}>
          Purple
        </button>
      </div>
    </div>
  );
};

export default App;
