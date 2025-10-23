function MovieCard({ movie }) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="top">
          <h1>
            TOP <span>NEW</span>
          </h1>
          <div className="thumbnail">
            <img src={movie.image} alt={movie.title} />
            <div className="heart">
              <span className="material-icons">favorite</span>
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
            <p>{movie.description}</p>
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
