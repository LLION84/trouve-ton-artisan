import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import artisans from '../artisans.json';

// Barre de recherche réutilisable — desktop et mobile
// Filtre par nom, spécialité et ville
function SearchBar({ mobile = false }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 1) {
      const filtered = artisans.filter(a =>
        a.name.toLowerCase().includes(value.toLowerCase()) ||
        a.specialty.toLowerCase().includes(value.toLowerCase()) ||
        a.location.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  const handleClick = (id) => {
    setQuery('');
    setResults([]);
    navigate(`/artisan/${id}`);
  };

  return (
    <div className={mobile ? 'search-wrapper-mobile' : 'search-wrapper'}>
      <div className={`input-group ${!mobile ? 'search-desktop' : ''}`}>
        <span className="input-group-text border-0" aria-hidden="true">
          <i className="bi bi-search text-white"></i>
        </span>
        <input
          type="search"
          className="form-control border-0"
          placeholder={mobile ? 'Rechercher un artisan...' : 'Rechercher...'}
          value={query}
          onChange={handleSearch}
          aria-label="Rechercher un artisan par nom, spécialité ou ville"
          autoComplete="off"
        />
      </div>

      {/* Dropdown résultats */}
      {results.length > 0 && (
        <div className="search-results" role="listbox" aria-label="Résultats de recherche">
          {results.map(a => (
            <div
              key={a.id}
              className="search-result-item"
              onClick={() => handleClick(a.id)}
              role="option"
              aria-selected="false"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleClick(a.id)}
            >
              <span className="result-name">{a.name}</span>
              <span className="result-info">{a.specialty} — {a.location}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;