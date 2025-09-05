import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="button-group">
        <Link to="/dataset" className="nav-link">DataSets</Link>
        <Link to="/indicator" className="nav-link">Indicator</Link>
        <Link to="/" className="nav-link">Methodology</Link>
      </div>
    </header>
  );
};

export default Header;
