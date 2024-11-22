import { Routes, Route } from 'react-router-dom';

import NavBar from '@/components/NavBar';
import './App.css';
import TestimonialCardPage from '@/pages/testimonial-card-page';
import BlogCardPage from '@/pages/blog-card-page.tsx';
import ProfileCardPage from '@/pages/profile-card-page.tsx';
import HeroSectionPage from '@/pages/hero-section-page.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar />} />
        <Route path='/testimonial-card' element={<TestimonialCardPage />} />
        <Route path='/blog-card' element={<BlogCardPage />} />
        <Route path='/profile-card' element={<ProfileCardPage />} />
        <Route path='/hero-section' element={<HeroSectionPage />} />
      </Routes>
    </>
  );
}

export default App;
