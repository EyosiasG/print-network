import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearchButtonClick = () => {
        // Redirect to SearchResults component with the search input as a query parameter
        navigate(`/search-results?query=${encodeURIComponent(searchInput)}`);
    };
    return (



        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom border-top" style={{ width: '100%' }}>
        <div className="container">
          <Link className="navbar-brand fs-2 fw-bold" to="/">
            <span style={{ color: '#f54242' }}></span> Print Network
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="" id="navbarSupportedContent">
          <ul className="navbar-nav mb-lg-0 text-center">
            <div className="Search" style={{  paddingLeft: '3rem' }}>
              <li className="nav-item">
                <form className="d-flex p-1">
                  <input type="text" style={{ width: '35rem', paddingLeft: '3rem' }} className="form-control p-1"  value={searchInput}
                    onChange={handleSearchInputChange} placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
                  <button className="btn btn-outline-success"   onClick={handleSearchButtonClick} type="button">Search</button>
                </form>
              </li>
            </div>
              <li className="nav-item dropdown" style={{  paddingLeft: '5rem' }}>
                <a className="nav-link dropdown-toggle fw-semibold text-uppercase me-1 text-danger" href="#" id="homeDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Home
                </a>
                <ul className="dropdown-menu" aria-labelledby="homeDropdown">
                  <li><Link className="dropdown-item" to="/details">Option 1</Link></li>
                  <li><Link className="dropdown-item" to="/login">Option 2</Link></li>
                  <li><Link className="dropdown-item" to="/registration">Option 3</Link></li>
                </ul>
              </li>
              <li>
                <Link className="cart-link" to="/cart">
                  🛒 Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


        
    );
}

export default Navbar;
