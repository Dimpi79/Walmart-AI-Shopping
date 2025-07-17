import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Walmart AI Companion</div>
      <nav>
        <a href="#features">Features</a>
        <a href="#demo">Demo</a>
      </nav>
    </header>
  );
};

export default Header;