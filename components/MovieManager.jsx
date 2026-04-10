import { useState } from "react";
import MoviesForm from "./moviesForm";
import Movie from "./movie";
import { v4 as uuid } from "uuid";

function MovieManager() {
  const [moviesArr, setMoviesArr] = useState([]);

  const addingHandler = (movieData) => {
    setMoviesArr([...moviesArr, movieData]);
  };

  return (
    <div className="app-container">
      <MoviesForm addMovie={addingHandler} />

      <div className="movies-grid">
        {moviesArr.map((movie) => (
          <Movie key={uuid()} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieManager;
