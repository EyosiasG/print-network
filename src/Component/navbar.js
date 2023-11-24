import React from 'react';

export const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand">Navbar</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <span className="navbar-text">Home</span>
          <span className="navbar-text">Features</span>
          <span className="navbar-text">Pricin1g</span>
        </div>
      </div>
    </nav>
  );
};

