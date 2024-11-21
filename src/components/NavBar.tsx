import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='bg-brand-subtle p-4'>
      <ul className='flex space-x-4'>
        <li>
          <Link to='/' className='text-primary-foreground'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/testimonial-card' className='text-primary-foreground'>
            Testimonial Card
          </Link>
        </li>
        <li>
          <Link to='/blog-card' className='text-primary-foreground'>
            Blog Card
          </Link>
        </li>
        <li>
          <Link to='/profile-card' className='text-primary-foreground'>
            Profile Card
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
