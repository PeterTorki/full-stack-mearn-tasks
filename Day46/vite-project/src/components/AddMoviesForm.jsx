import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialMovies = { id: uuidv4(), title: "", image: "", description: "", rating: 0 };

function AddMoviesForm({ handleAddMovie }) {
  const [toAddMovie, setToAddMovie] = useState(initialMovies);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "rating") {
      if (value < 0 || value > 5) return;
    }
    setToAddMovie({ ...toAddMovie, [name]: value });
  };
  const handleSubmit = (e) => {
    console.log("hi");
    e.preventDefault();
    handleAddMovie(toAddMovie);
    setToAddMovie(initialMovies);
  };
  return (
    <div className="form-container">
      <h1 className="title">Add Movie</h1>
      <div className="form-row">
        <form className="add-movie-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={toAddMovie.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={toAddMovie.image}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={toAddMovie.description}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            value={toAddMovie.rating}
            onChange={handleChange}
            min="0"
            max="5"
            step="0.5"
            required
          />
          <button type="submit">Add Movie</button>
        </form>
        <div className="card-container">
          <div className="card">
            <div className="top">
              <div className="thumbnail">
                {toAddMovie.image && <img src={toAddMovie.image} alt={toAddMovie.title} />}
              </div>
              <div className="info">
                <h2>{toAddMovie.title}</h2>
                <div className="rating">
                  {Array.from({ length: Math.floor(toAddMovie.rating) }).map((_, i) => (
                    <span key={i} className="material-icons">
                      star_rate
                    </span>
                  ))}
                  {toAddMovie.rating % 1 !== 0 && <span className="material-icons">star_half</span>}
                </div>
                <p>{toAddMovie.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMoviesForm;
