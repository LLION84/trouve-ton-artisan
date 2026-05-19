import { Link } from 'react-router-dom';

// Footer identique sur toutes les pages
// Adresse de l'antenne de Lyon + liens légaux
function Footer() {
  const legalLinks = [
    { to: '/mentions-legales', label: 'Mentions légales' },
    { to: '/donnees-personnelles', label: 'Données personnelles' },
    { to: '/accessibilite', label: 'Accessibilité' },
    { to: '/cookies', label: 'Cookies' },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="container py-4">
        <div className="row align-items-center gy-3">

          {/* Adresse antenne Lyon */}
          <div className="col-12 col-md-5">
            <address className="footer-address">
              <p>101 cours Charlemagne</p>
              <p>CS 20033 — 69269 LYON CEDEX 02</p>
              <p>
                <a href="tel:+33426734000" aria-label="Appeler le +33 4 26 73 40 00">
                  +33 (0)4 26 73 40 00
                </a>
              </p>
            </address>
          </div>

          {/* Séparateur mobile */}
          <div className="col-12 d-md-none" aria-hidden="true">
            <div className="footer-separator"></div>
          </div>

          {/* Liens légaux */}
          <div className="col-12 col-md-7">
            <nav
              className="d-flex flex-wrap gap-2 justify-content-md-end"
              aria-label="Liens légaux"
            >
              {legalLinks.map(({ to, label }, i) => (
                <span key={to} className="d-flex align-items-center gap-2">
                  <Link to={to} className="footer-link">{label}</Link>
                  {i < legalLinks.length - 1 && (
                    <span className="footer-dot" aria-hidden="true">•</span>
                  )}
                </span>
              ))}
            </nav>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;