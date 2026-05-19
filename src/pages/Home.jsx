import artisans from '../artisans.json';
import ArtisanCard from '../components/ArtisanCard';

// Page d'accueil — présentation + artisans du mois
function Home() {
  const topArtisans = artisans.filter(a => a.top === true);

  const steps = [
    { num: 1, text: "Choisir la catégorie d'artisanat dans le menu" },
    { num: 2, text: "Choisir un artisan" },
    { num: 3, text: "Le contacter via le formulaire de contact" },
    { num: 4, text: "Une réponse sera apportée sous 48h" },
  ];

  return (
    <main id="main-content">

      {/* Section explication du fonctionnement */}
      <section className="how-it-works" aria-labelledby="how-title">
        <div className="container">
          <h2 id="how-title" className="text-center">
            Comment trouver mon artisan ?
          </h2>
          <div className="row g-3">
            {steps.map(step => (
              <div className="col-12 col-sm-6 col-lg-3" key={step.num}>
                <div className="step-card">
                  <span className="step-num" aria-hidden="true">{step.num}</span>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section artisans du mois */}
      <section className="top-artisans" aria-labelledby="top-title">
        <div className="container">
          <h2 id="top-title" className="text-center">
            Les artisans du mois
          </h2>
          <div className="row g-3 justify-content-center">
            {topArtisans.map(artisan => (
              <div className="col-12 col-sm-6 col-lg-4" key={artisan.id}>
                <ArtisanCard artisan={artisan} />
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;