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
    setWertvolleGegenstaende(event.target.value);
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
    
    if (wohnflaeche <= 40) {
    versicherungssumme += basiswert * 0.6;
    } else if (wohnflaeche <= 60) {
    versicherungssumme += basiswert * 0.8;
    } else if (wohnflaeche <= 80) {
    versicherungssumme += basiswert * 1;
    } else if (wohnflaeche <= 100) {
    versicherungssumme += basiswert * 1.2;
    } else if (wohnflaeche > 100) {
    versicherungssumme += basiswert * 1.4;
    }
    
    if (personen === "1") {
    versicherungssumme += basiswert * 0.6;
    } else if (personen === "2") {
    versicherungssumme += basiswert * 0.8;
    } else if (personen === "3") {
    versicherungssumme += basiswert * 1;
    } else if (personen === "4") {
    versicherungssumme += basiswert * 1.2;
    } else if (personen === "5") {
    versicherungssumme += basiswert * 1.4;
    }
    

   versicherungssumme = versicherungssumme + parseInt(wertvolleGegenstaende);

    return versicherungssumme;
    }
    

  return (
    <div id="summerrechner">
      <form id="summenform">
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
        <div id="gegenstaende">
        <label>
          Wohnfläche in Quadratmeter:
<input type="number" min="0" value={wohnflaeche} onChange={handleWohnflaecheChange} />
</label>
</div>
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
Wertvolle Gegenstände:
<div id="gegenstaende">
<input type="text" min="0" value={wertvolleGegenstaende} onChange={handleWertvolleGegenstaendeChange} />
</div>
</label>
<h2>Versicherungssumme: {berechneVersicherungssumme()} Franken</h2>
</form>
</div>
);
}

export default HausratVersicherungsrechner;
