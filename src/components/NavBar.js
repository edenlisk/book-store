import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => (
  <nav className="container d-flex align-items-center bg-light py-4 shadow justify-content-evenly">
    <div className="me-auto px-5 d-flex align-items-center">
      <Link className="fw-bold text-decoration-none fs-3" style={{ color: '#0290FF' }} to="/">Bookstore CMS</Link>
      <div className="ps-5">
        <Link className="px-3 text-decoration-none text-dark" to="/">Books</Link>
        <Link className="px-3 text-decoration-none text-dark" to="/Categories">Categories</Link>
      </div>
    </div>
    <div className="me-5">
      <Link to="/"><FaUserCircle style={{ color: '#0290FF', height: '30px', width: '30px' }} /></Link>
    </div>
  </nav>
);

export default NavBar;
