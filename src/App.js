import './App.css';
import { Popup } from './lib/components/Modal';
import React, { useState } from 'react';

function App() {
  const [popupActive, setPopupActive] = useState(false);

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
        <Popup
          showPopup={popupActive}
          closePopup={() => setPopupActive(false)}
          overlay
        >
          Employee Created!
        </Popup>
      </div>
    </>
  );
}

export default App;
