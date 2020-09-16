import React from 'react';
import { Link } from 'react-router-dom';

const Header = ()=> {
    return (
      <div className='mt-4'>
          <nav className="navbar navbar-expand-lg navbar-dark bg-danger mb-4">
  <Link className="navbar-brand" to="/">Music App</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Accueil <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/favorites">Favorites</Link>
      </li>
    </ul>
  </div>
</nav>
      </div>
    );
}
export default Header