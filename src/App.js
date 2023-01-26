import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BookList from './components/BookList';
import Categories from './components/Categories';

function App() {
  return (
    <div className="container-fluid bg-dark bg-opacity-10 py-5">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
