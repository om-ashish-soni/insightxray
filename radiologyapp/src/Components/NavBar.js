import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/upload-image">Upload Image</Link>
        </li>
        <li>
          <Link to="/guide">Guide</Link>
        </li>
      </ul>
    </nav>
  );
}
