import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<nav className='bg-brand-subtle p-4'>
			<ul className='flex space-x-4'>
				<li>
					<Link
						to='/'
						className='text-primary-foreground'
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						to='/testimonial-card'
						className='text-primary-foreground'
					>
						Testimonial Card
					</Link>
				</li>
				<li>
					<Link
						to='/blog-card'
						className='text-primary-foreground'
					>
						Blog Card
					</Link>
				</li>
				<li>
					<Link
						to='/profile-card'
						className='text-primary-foreground'
					>
						Profile Card
					</Link>
				</li>
				<li>
					<Link
						to='/hero-section'
						className='text-primary-foreground'
					>
						Hero Section
					</Link>
				</li>
				<li>
					<Link
						to='/hero-section-bullet'
						className='text-primary-foreground'
					>
						Hero Section Bullet
					</Link>
				</li>
				<li>
					<Link
						to='/feature-section-left'
						className='text-primary-foreground'
					>
						Feature Section Left
					</Link>
				</li>
				<li>
					<Link
						to='/feature-section-right'
						className='text-primary-foreground'
					>
						Feature Section Right
					</Link>
				</li>
				<li>
					<Link
						to='/feature-section-grid'
						className='text-primary-foreground'
					>
						Feature Section Grid
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
