// Composant réutilisable d'affichage des étoiles de notation
function Stars({ note }) {
  const full = Math.floor(parseFloat(note));
  const empty = 5 - full;
  return (
    <div className="stars" aria-label={`Note : ${note} sur 5`}>
      {'★'.repeat(full)}{'☆'.repeat(empty)}
    </div>
  );
}

export default Stars;