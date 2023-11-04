import React from 'react';
import MatrixRainingCode from './components/MatrixRainingEffect';
import CheemsOverlay from './components/CheemsOverlay';


function App() {
  return (
    <div className="min-h-screen">
      <MatrixRainingCode className="absolute inset-0" />
      <div className="flex flex-col">
        <CheemsOverlay />
      </div>
    </div>
  );
}

export default App;
