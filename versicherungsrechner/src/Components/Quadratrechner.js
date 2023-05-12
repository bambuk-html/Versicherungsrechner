import React, { useState } from 'react';

function Quadratrechner() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(number1 * number2);
  };

  return (
    <div id="quadraterrechner">
      <form id="quadratform" onSubmit={handleSubmit}>
        <label>
          <h4>Wohnfläche in Quadratmeter:</h4>
          <input
            type="number"
            min="0"
            value={number1}
            onChange={(e) => setNumber1(e.target.value)}
          />
        </label>
        <br />
        <label>
          <h4>Durchschnittliche Kosten pro Quadratmeter:</h4>
          <p id="beschreibung">Als Pauschale pro Quadratmeter Wohnfläche kannman mit einem Wert von CHF 1'000 rechnen.</p>
          <div id="kostenprom">
          <input 
            type="number"
            min="0"
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
          />
          </div>
        </label>
        <br />
        <button type="submit">Berechnen</button>
        <br />
        <h3>Versicherungssumme in CHF: {result}</h3>
      </form>
    </div>
  );
}

export default Quadratrechner;