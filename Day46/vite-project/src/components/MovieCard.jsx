function MovieCard({ movie, handleDeleteMovie }) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="top">
          <h1>
            TOP <span>NEW</span>
          </h1>
          <div className="thumbnail">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <div className="delete" onClick={() => handleDeleteMovie(movie.id)}>
              <span className="material-symbols-outlined">delete</span>
            </div>
          </div>
          <div className="info">
            <h2>{movie.title}</h2>
            <div className="rating">
              {Array.from({ length: Math.floor(movie.rating) }).map((_, i) => (
                <span key={i} className="material-icons">
                  star_rate
                </span>
              ))}
              {movie.rating % 1 !== 0 && <span className="material-icons">star_half</span>}
            </div>
            <p>{movie.overview}</p>
            <div className="genre">
              {movie.genre_ids.map((genreId) => (
                <span key={genreId} className="genre-badge">
                  {genreId}
                </span>
              ))}
            </div>
          </div>
          <div className="follow">
            <button>
              <span className="material-icons">add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
