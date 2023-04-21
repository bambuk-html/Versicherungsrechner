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
          Fläche in Quadratmeter
          <input
            type="number"
            value={number1}
            onChange={(e) => setNumber1(Number(e.target.value))}
          />
        </label>
        <br />
        <label>
          Kosten pro Quadratmeter
          <input
            type="number"
            value={number2}
            onChange={(e) => setNumber2(Number(e.target.value))}
          />
        </label>
        <br />
        <button type="submit">Berechnen</button>
      </form>
      <h3>Versicherungssumme: {result}</h3>
    </div>
  );
}

export default Quadratrechner;