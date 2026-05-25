import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import artisans from '../artisans.json';
import Stars from '../components/Stars';
import emailjs from '@emailjs/browser';

// Page fiche artisan — infos, à propos, formulaire de contact
function Artisan() {
  const { id } = useParams();
  const artisan = artisans.find(a => a.id === id);

  const [form, setForm] = useState({ nom: '', objet: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  
  emailjs.send(
    'service_xcsxdjo',
    'template_sop9x8i',
    {
      name: form.nom,
      title: form.objet,
      message: form.message,
      from_name: form.nom,
    },
    'awRQk-37qQq35y9ID'
  ).then(() => {
    setSent(true);
    setForm({ nom: '', objet: '', message: '' });
  }).catch(() => {
    alert('Erreur lors de l\'envoi. Réessayez.');
  });
};

  if (!artisan) {
    return (
      <main className="py-5">
        <div className="container">
          <h1>Artisan introuvable</h1>
          <Link to="/" className="btn-retour mt-3">Retour à l'accueil</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="artisan-page py-5" id="main-content">
      <div className="container">

        <Link to={-1} className="btn-retour mb-4 d-inline-flex">
          Retour
        </Link>

        <div className="row g-4">

          {/* Infos artisan */}
          <div className="col-12 col-lg-4">
            <article className="artisan-card p-4 h-100">
              <Stars note={artisan.note} />
              <h1 className="artisan-name">{artisan.name}</h1>
              <p className="artisan-specialty">{artisan.specialty}</p>
              <p className="artisan-location">
                <i className="bi bi-geo-alt-fill me-1" aria-hidden="true"></i>
                {artisan.location}
              </p>
              {artisan.website && (
  <a href={artisan.website} target="_blank" rel="noopener noreferrer" className="artisan-website">
    <i className="bi bi-globe me-1" aria-hidden="true"></i>
    Voir le site web
  </a>
)}
            </article>
          </div>

          {/* À propos */}
          <div className="col-12 col-lg-4">
            <section className="artisan-card p-4 h-100" aria-labelledby="about-title">
              <h2 id="about-title">À propos</h2>
              <p>{artisan.about}</p>
            </section>
          </div>

          {/* Formulaire de contact */}
          <div className="col-12 col-lg-4">
            <section className="artisan-card p-4 h-100" aria-labelledby="contact-title">
              <h2 id="contact-title">Contacter l'artisan</h2>
              {sent ? (
                <div className="contact-success" role="alert">
                  <i className="bi bi-check-circle-fill me-2" aria-hidden="true"></i>
                  Message envoyé ! L'artisan vous répondra sous 48h.
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label htmlFor="nom" className="form-label">Votre nom</label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      className="form-control"
                      value={form.nom}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="objet" className="form-label">Objet</label>
                    <input
                      type="text"
                      id="objet"
                      name="objet"
                      className="form-control"
                      value={form.objet}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows="4"
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn-contact w-100">
                    Envoyer
                  </button>
                </form>
              )}
            </section>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Artisan;