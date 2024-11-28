import { Routes, Route } from 'react-router-dom';

import NavBar from '@/components/NavBar';
import './App.css';
import TestimonialCardPage from '@/pages/testimonial-card-page';
import BlogCardPage from '@/pages/blog-card-page.tsx';
import ProfileCardPage from '@/pages/profile-card-page.tsx';
import HeroSectionPage from '@/pages/hero-section-page.tsx';
import HeroSectionBulletsPage from '@/pages/hero-section-bullets-page.tsx';
import FeatureSectionSideImagePage from '@/pages/feature-section-side-image-page.tsx';
import FeatureSectionGridPage from '@/pages/feature-section-grid-page.tsx';

function App() {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<NavBar />}
				/>
				<Route
					path='/testimonial-card'
					element={<TestimonialCardPage />}
				/>
				<Route
					path='/blog-card'
					element={<BlogCardPage />}
				/>
				<Route
					path='/profile-card'
					element={<ProfileCardPage />}
				/>
				<Route
					path='/hero-section'
					element={<HeroSectionPage />}
				/>
				<Route
					path='/hero-section-bullet'
					element={<HeroSectionBulletsPage />}
				/>
				<Route
					path='/feature-section-left'
					element={<FeatureSectionSideImagePage orientation='left' />}
				/>
				<Route
					path='/feature-section-right'
					element={<FeatureSectionSideImagePage orientation='right' />}
				/>
				<Route
					path='/feature-section-grid'
					element={<FeatureSectionGridPage />}
				/>
			</Routes>
		</>
	);
}

export default App;
