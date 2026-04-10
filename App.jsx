import { useState } from "react";
import "./App.css";
import MovieManager from "./components/MovieManager";

function App() {
  const [showMovieForm, setShowMovieForm] = useState(false);

  const handleClickMe = () => {
    setShowMovieForm(true);
  };

  if (showMovieForm) {
    return <MovieManager />;
  }

  return (
    <div className="app-wrapper">
      <div className="container">
        <h1 className="app-title text-center">My App</h1>

        <div className="card text-center">
          <p>Welcome to the Movie App </p>
          <button className="btn btn-primary" onClick={handleClickMe}>
            Click Me To Start The Apllication
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
