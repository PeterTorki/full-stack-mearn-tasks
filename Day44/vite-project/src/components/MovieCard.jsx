import { PureComponent } from "react";

class MovieCard extends PureComponent {
  render() {
    const { movie } = this.props;
    console.log(movie);
    const imgPath = "https://image.tmdb.org/t/p/w500";
    return (
      <div className="card-container">
        <div className="card">
          <div className="top">
            <h1>
              TOP <span>NEW</span>
            </h1>
            <div className="thumbnail">
              <img src={`${imgPath}${movie.poster_path}`} alt={movie.title} />
              <div className="heart">
                <span className="material-icons">favorite</span>
              </div>
            </div>
            <div className="info">
              <h2>{movie.title}</h2>
              <div className="rating">
                {Array.from({ length: Math.floor(movie.vote_average) }).map((_, i) => (
                  <span key={i} className="material-icons">
                    star_rate
                  </span>
                ))}
                {movie.vote_average % 1 !== 0 && <span className="material-icons">star_half</span>}
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
}

export default MovieCard;
