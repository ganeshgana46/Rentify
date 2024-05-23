// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <ul className="flex justify-between items-center">
          <li>
            <Link to="/logo" className="text-white font-bold">Rentify</Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:underline">Login</Link>
          </li>
          <li>
            <Link to="/register" className="text-white hover:underline">Register</Link>
          </li>
          <li>
            <Link to="/post" className="text-white hover:underline">Post Property</Link>
          </li>
          <li>
            <Link to="/view" className="text-white hover:underline">View Properties</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
