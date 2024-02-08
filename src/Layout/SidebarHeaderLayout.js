import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarHeaderLayout.css';


const SidebarHeaderLayout = ({ children }) => {
  return (
    
      <div className="app-container">
        <div className="sidebar">
          <div className="logo">Sidebar</div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/registration">Register</Link></li>
              <li><Link to="/list">All Students</Link></li>
              <li><Link to="/edit-students">Edit Students</Link></li>
            </ul>
          </nav>
        </div>
        <div className="content">
          {/* <header>
            <h1>Welcome to the App</h1>
          </header> */}
          {/* Render the specific content of each page */}
          {children}
        </div>
      </div>
    
  );
};

export default SidebarHeaderLayout;

