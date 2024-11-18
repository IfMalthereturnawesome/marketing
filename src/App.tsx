import { Routes, Route } from 'react-router-dom';

import NavBar from '@/components/NavBar';
import './App.css'
import TestimonialCardPage from '@/pages/testimonial-card-page';

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/testimonial-card" element={<TestimonialCardPage />} />

      </Routes>
    </>
  )
}

export default App
