import { Link } from 'react-router-dom';

export default function SummeButton() {
  return (
    <div>
      <Link to="Summe">
        <button>Berechnung mit Versicherungssummenmodell</button>
      </Link>
    </div>
  );
}