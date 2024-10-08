import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  let navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar b navbar-expand-lg" style={{backgroundColor:'#171717'}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <b style={{ color: '#728FCE' }}>CloudScript</b>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={{color: "white"}}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{color: "white"}}>About</Link>
            </li>
          </ul>
          { !localStorage.getItem('token') ? (
            <form className="d-flex">
              <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
              <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
            </form>
          ) : (
            <button onClick={handleLogout} className='btn btn-primary'>Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
