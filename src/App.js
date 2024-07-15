import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/Home/Bet';

import NewsDetail from './pages/NewsDetail/NewsDetail';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news/:id" element={<NewsDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;