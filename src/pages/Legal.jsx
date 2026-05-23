import { useParams } from 'react-router-dom';

// Pages légales — contenu à remplir par un cabinet spécialisé
const titles = {
  'mentions-legales': 'Mentions légales',
  'donnees-personnelles': 'Données personnelles',
  'accessibilite': 'Accessibilité',
  'cookies': 'Cookies',
};

function Legal() {
  const { page } = useParams();
  const title = titles[page] || 'Page légale';

  return (
    <main className="legal-page py-5" id="main-content">
      <div className="container">
        <h1>{title}</h1>
        <p className="text-muted mt-3">
          Cette page est en cours de rédaction par un cabinet spécialisé.
        </p>
      </div>
    </main>
  );
}

export default Legal;