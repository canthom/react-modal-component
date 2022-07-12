import './App.css';
import Popup from './lib/components/Modal';
import React, { useState } from 'react';

function App() {
  const [btnPopup, setPopupActive] = useState(false);

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
        <button onClick={() => setPopupActive(true)}>Show Modal</button>
      </div>
      <Popup
        showPopup={btnPopup}
        closePopup={() => setPopupActive(false)}
        overlay={true}
      >
        Employee Created!
      </Popup>
    </>
  );
}

export default App;
