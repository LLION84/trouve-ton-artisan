import { Link } from 'react-router-dom';

// Page 404 — affichée pour toute route inconnue
function NotFound() {
  return (
    <main className="not-found" id="main-content">
      <div className="not-found-box">
        <div className="not-found-img">🔨</div>
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
