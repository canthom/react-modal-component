import './App.css';
import Popup from './lib/components/Modal';
import React, { useState } from 'react';

function App() {
  const [btnPopup, setBtnPopup] = useState(false);

  return (
    <>
      <div className="App">
        <button onClick={() => setBtnPopup(true)}>
          Faire apparaître la modal
        </button>
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
