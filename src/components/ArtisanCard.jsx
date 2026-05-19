import { Link } from 'react-router-dom';
import Stars from './Stars';

// Carte artisan cliquable — utilisée sur la page d'accueil et les pages catégories
function ArtisanCard({ artisan }) {
  return (
    <Link
      to={`/artisan/${artisan.id}`}
      className="artisan-card-link"
      aria-label={`Voir la fiche de ${artisan.name}, ${artisan.specialty} à ${artisan.location}`}
    >
      <article className="artisan-card p-3">
        <Stars note={artisan.note} />
        <h3>{artisan.name}</h3>
        <p className="artisan-specialty">{artisan.specialty}</p>
        <p className="artisan-location">
          <i className="bi bi-geo-alt-fill me-1" aria-hidden="true"></i>
          {artisan.location}
        </p>
      </article>
    </Link>
  );
}

export default ArtisanCard;