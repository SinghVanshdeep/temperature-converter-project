import React, { useState } from 'react';

function App() {
  const [cels, setCels] = useState('');
  const [fahr, setFahr] = useState('');
  const [kel, setKel] = useState ('');


  function handleCels(e){
    setCels(Number(e.target.value));
    setFahr((Number(e.target.value)*9/5)+32);
    setKel(Number(e.target.value)+273.15);
  }
  function handleFahr(e){
    setFahr(Number(e.target.value));
    setCels((Number(e.target.value)-32)*5/9);
    setKel(((Number(e.target.value)-32)*5/9)+273.15);
  }
  function handleKels(e){
    setKel(Number(e.target.value));
    setFahr(((Number(e.target.value)-273.15)*9/5)+32);
    setCels(Number(e.target.value)-273.15);
  }
  return (
    <div id="main">
      <div id="container">
      <p className="h2">Temperature Converter</p>
      <div className="temp-group">
        <label className="mt-2">Celsius:</label>
        <input className="form-control" type="number" placeholder="Enter Temperature" value={cels} onChange={handleCels}/>
      </div>
      <div className="temp-group">
        <label className="mt-2">Fahrenheit:</label>
        <input id="fahr" className="form-control" type="number" placeholder="Enter Temperature" value={fahr} onChange={handleFahr}/>
      </div>
      <div className="temp-group">
        <label className="mt-2">Kelvin:</label>
        <input className="form-control" type="number" placeholder="Enter Temperature" value={kel} onChange={handleKels}/>
      </div>
      </div>
    </div>
  );
}

export default App;
