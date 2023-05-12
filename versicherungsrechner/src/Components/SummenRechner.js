import React, { useState } from 'react';

function HausratVersicherungsrechner() {
  const [zimmer, setZimmer] = useState(0);
  const [wohnflaeche, setWohnflaeche] = useState(0);
  const [personen, setPersonen] = useState(0);
  const [wertvolleGegenstaende, setWertvolleGegenstaende] = useState([]);

  function handleZimmerChange(event) {
    setZimmer(event.target.value);
  }

  function handleWohnflaecheChange(event) {
    setWohnflaeche(event.target.value);
  }

  function handlePersonenChange(event) {
    setPersonen(event.target.value);
  }

  function handleWertvolleGegenstaendeChange(event) {
    setWertvolleGegenstaende(event.target.value.split(','));
  }

  function berechneVersicherungssumme() {
    //hier kommt der hauptteil der logik hin
  }

  return (
    <div>
      <h2>Hausrat-Versicherungsrechner</h2>
      <form>
        <label>
          Anzahl der Zimmer:
          <input type="number" min="0" value={zimmer} onChange={handleZimmerChange} />
        </label>
        <br />
        <label>
          Wohnfläche:
<input type="number" min="0" value={wohnflaeche} onChange={handleWohnflaecheChange} />
</label>
<br />
<label>
Anzahl der Personen:
<input type="number" min="0" value={personen} onChange={handlePersonenChange} />
</label>
<br />
<label>
Wertvolle Gegenstände (durch Komma getrennt):
<input type="text" min="0" value={wertvolleGegenstaende} onChange={handleWertvolleGegenstaendeChange} />
</label>
<br />
<button onClick={berechneVersicherungssumme}>Berechnen</button>
</form>
{
    //ergebnis
    
}
</div>
);
}

export default HausratVersicherungsrechner;
