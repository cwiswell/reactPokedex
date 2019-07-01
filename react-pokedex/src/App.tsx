import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <div className="mainPokedex">
        <div className="cameraRing">
          <div className="cameraLens"></div>
        </div>
        <div className="light redLight"></div>
        <div className="light yellowLight"></div>
        <div className="light greenLight"></div>
      </div>
    </div>
  );
}

export default App;
