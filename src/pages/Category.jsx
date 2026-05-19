import { useParams } from 'react-router-dom';
import artisans from '../artisans.json';
import ArtisanCard from '../components/ArtisanCard';

// Correspondance URL → nom de catégorie dans le JSON
const categoryMap = {
  batiment: 'Bâtiment',
  services: 'Services',
  fabrication: 'Fabrication',
  alimentation: 'Alimentation',
};

// Page liste des artisans par catégorie
function Category() {
  const { name } = useParams();
  const categoryName = categoryMap[name];
  const filteredArtisans = artisans.filter(a => a.category === categoryName);

  // Catégorie inconnue
  if (!categoryName) {
    return (
      <main className="py-5">
        <div className="container">
          <h1>Catégorie introuvable</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="category-page" id="main-content">
      <div className="container py-5">
        <h1 className="category-title">{categoryName}</h1>
        <p className="category-count">
          {filteredArtisans.length} artisan{filteredArtisans.length > 1 ? 's' : ''} trouvé{filteredArtisans.length > 1 ? 's' : ''}
        </p>
        <div className="row g-3">
          {filteredArtisans.map(artisan => (
            <div className="col-12 col-sm-6 col-lg-4" key={artisan.id}>
              <ArtisanCard artisan={artisan} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Category;