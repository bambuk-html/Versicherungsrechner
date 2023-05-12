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
    let versicherungssumme = 0;
    const basiswert = 50000;
    
    if (zimmer === "1") {
    versicherungssumme += basiswert * 0.6;
    } else if (zimmer === "2") {
    versicherungssumme += basiswert * 0.8;
    } else if (zimmer === "3") {
    versicherungssumme += basiswert * 1;
    } else if (zimmer === "4") {
    versicherungssumme += basiswert * 1.2;
    } else if (zimmer === "5") {
    versicherungssumme += basiswert * 1.4;
    }
    
    return versicherungssumme;
    }

  return (
    <div>
      <h2>Hausrat-Versicherungsrechner</h2>
      <form>
      <label>
          Anzahl der Zimmer:
          <select value={zimmer} onChange={handleZimmerChange}>
            <option value="">Bitte wählen</option>
            <option value="1">1 Zimmer</option>
            <option value="2">2 Zimmer</option>
            <option value="3">3 Zimmer</option>
            <option value="4">4 Zimmer</option>
            <option value="5">5 Zimmer oder mehr</option>
          </select>
        </label>
        <br />
        <label>
          Wohnfläche in Quadratmeter: 
<input type="number" min="0" value={wohnflaeche} onChange={handleWohnflaecheChange} />
</label>
<br />
<label>
          Anzahl der Personen:
          <select value={personen} onChange={handlePersonenChange}>
            <option value="">Bitte wählen</option>
            <option value="1">1 Person</option>
            <option value="2">2 Personen</option>
            <option value="3">3 Personen</option>
            <option value="4">4 Personen</option>
            <option value="5">5 Personen oder mehr</option>
          </select>
        </label>
<br />
<label>
Preis wertvoller Gegenstände (durch Komma getrennt):
<input type="number" min="0" value={wertvolleGegenstaende} onChange={handleWertvolleGegenstaendeChange} />
</label>
</form>
<p>Versicherungssumme: {berechneVersicherungssumme()} Franken</p>
</div>
);
}

export default HausratVersicherungsrechner;
