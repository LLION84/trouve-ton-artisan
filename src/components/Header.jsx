import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Logo.png';
import SearchBar from './SearchBar';

// Header présent sur toutes les pages
// Navigation principale + barre de recherche responsive
function Header() {
  return (
    <header className="header" role="banner">
      <nav className="navbar navbar-expand-lg py-2" aria-label="Navigation principale">
        <div className="container">

          {/* Logo — lien vers l'accueil */}
          <Link className="navbar-brand" to="/" aria-label="Trouve ton artisan — Retour accueil">
            <img src={logo} alt="Logo Trouve ton artisan" className="logo-img" />
          </Link>

          {/* Burger — mobile et tablette uniquement */}
          <button
            className="navbar-toggler border-0 d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Ouvrir le menu de navigation"
          >
            <i className="bi bi-list" aria-hidden="true"></i>
          </button>

          {/* Desktop — barre de recherche + liens */}
          <div className="d-none d-lg-flex align-items-center flex-grow-1 ms-4 gap-3">
            <SearchBar />
            <ul className="navbar-nav gap-1 ms-auto" role="menubar">
              {[
                { to: '/category/batiment', label: 'Bâtiment' },
                { to: '/category/services', label: 'Services' },
                { to: '/category/fabrication', label: 'Fabrication' },
                { to: '/category/alimentation', label: 'Alimentation' },
              ].map(({ to, label }) => (
                <li className="nav-item" key={to} role="none">
                  <NavLink
                    className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                    to={to}
                    role="menuitem"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu burger collapse — mobile et tablette */}
          <div className="collapse d-lg-none w-100" id="navMenu">
            <ul className="navbar-nav py-2">
              {[
                { to: '/category/batiment', label: 'Bâtiment' },
                { to: '/category/services', label: 'Services' },
                { to: '/category/fabrication', label: 'Fabrication' },
                { to: '/category/alimentation', label: 'Alimentation' },
              ].map(({ to, label }) => (
                <li className="nav-item" key={to}>
                  <NavLink
                    className={({ isActive }) => `nav-link py-2${isActive ? ' active' : ''}`}
                    to={to}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </nav>

      {/* Barre de recherche mobile et tablette — sous la navbar */}
      <div className="search-mobile d-lg-none px-3 py-2">
        <SearchBar mobile={true} />
      </div>
    </header>
  );
}

export default Header;