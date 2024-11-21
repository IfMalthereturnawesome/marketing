import { Routes, Route } from 'react-router-dom';

import NavBar from '@/components/NavBar';
import './App.css';
import TestimonialCardPage from '@/pages/testimonial-card-page';
import BlogCardPage from '@/pages/blog-card-page.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar />} />
        <Route path='/testimonial-card' element={<TestimonialCardPage />} />
        <Route path='/blog-card' element={<BlogCardPage />} />
      </Routes>
    </>
  );
}

export default App;
