import { Link } from 'react-router-dom';

// Page 404 — affichée pour toute route inconnue
function NotFound() {
  return (
    <main className="not-found" id="main-content">
      <div className="not-found-box">
        <div className="not-found-img">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 6.5L17.5 10.5L7 21H3V17L13.5 6.5Z" stroke="#0074c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 5L19 9" stroke="#0074c7" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 4L16 2L22 8L20 10" stroke="#0074c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
        <p className="not-found-num" aria-label="Erreur 404">404</p>
      <div className="not-found-separator" aria-hidden="true"></div>
        <p className="not-found-text">Oups ! Cette page n'existe pas.</p>
        <Link to="/" className="btn-retour">
          Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
