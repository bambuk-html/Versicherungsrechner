import { Link } from 'react-router-dom';

export default function HomeButton() {
  return (
    <div>
      <Link to="/">
        <button>To Homepage</button>
      </Link>
    </div>
  );
}