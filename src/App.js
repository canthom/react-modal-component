import './App.css';
import Popup from './lib/components/Modal';
import React, { useState } from 'react';

function App() {
  const [btnPopup, setBtnPopup] = useState(false);

  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'grid',
          placeItems: 'center',
        }}
        className="App"
      >
        <button onClick={() => setBtnPopup(true)}>Show Modal</button>
      </div>
      <Popup
        showPopup={btnPopup}
        setShowPopup={() => setBtnPopup(false)}
        overlay={true}
      >
        Employee Created!
      </Popup>
    </>
  );
}

export default App;
