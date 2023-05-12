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
    <div>
      <h2>Quadratrechner</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <h4>Fläche in Quadratmeter:</h4>
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
          <p>Als Pauschale pro Quadratmeter Wohnfläche kannman mit einem Wert von CHF 1'000 rechnen.</p>
          <input 
            type="number"
            min="0"
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Berechnen</button>
      </form>
      <h3>Versicherungssumme in CHF: {result}</h3>
    </div>
  );
}

export default Quadratrechner;