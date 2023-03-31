import { Link } from 'react-router-dom';

export default function QuadratButton() {
  return (
    <div>
      <Link to="Quadratmeter">
        <button>Berechnung mit Quadratmetermodell</button>
      </Link>
    </div>
  );
}