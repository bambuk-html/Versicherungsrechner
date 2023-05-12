import { Link } from 'react-router-dom';

export default function HomeButton() {
  return (
    <div>
      <Link to="/">
        <button>Zurück zur Auswahl</button>
      </Link>
    </div>
  );
}