import React, { useState } from 'react';
import { Alert, Button, Badge } from 'react-bootstrap';

function Navbar(){
    const [show, setShow] = useState(false);
  return (
    <>
     {/* Show alert above navbar */}
      {show && (
        <Alert variant="warning" onClose={() => setShow(false)} dismissible className="mb-0 rounded-0">
          <h2>About Me</h2>
      <p>
        Hello! I am <strong>Farheen Azad</strong>, a passionate web developer. This is my simple profile page design.
      </p>
        </Alert>
      )}

      {/* Navbar */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Button variant="warning" onClick={() => setShow(true)}>
      Farheen Azad <Badge bg="secondary">9</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </> 
  );
}
export default Navbar;