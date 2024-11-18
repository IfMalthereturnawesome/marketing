
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-brand-subtle p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-primary-foreground">
            Home
          </Link>
        </li>
        <li>
          <Link to="/testimonial-card" className="text-primary-foreground">
            Testimonial Card
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
}

export default NavBar;
