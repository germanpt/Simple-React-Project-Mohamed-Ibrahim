import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function MovieForm({ addMovie }) {
  const [movie, setMovie] = useState({
    movieName: "",
    genre: "",
    duration: 100,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(movie);
    setMovie({ movieName: "", genre: "", duration: 100 });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const processedValue =
      name === "duration" ? parseInt(value, 10) || 60 : value;
    setMovie({ ...movie, [name]: processedValue });
  };

  return (
    <div className="form-wrapper">
      <Card className="form-card">
        <h3 className="form-title">ADD EL MOVIE</h3>

        <Form onSubmit={handleSubmit}>
          <FloatingLabel label="Movie Name" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Movie Name"
              required
              name="movieName"
              value={movie.movieName}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel label="Genre" className="mb-3">
            <Form.Select
              name="genre"
              required
              value={movie.genre}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Movie Type
              </option>
              <option value="action">Action</option>
              <option value="comedy">Comedy</option>
              <option value="drama">Drama</option>
              <option value="horror">Horror</option>
              <option value="sci-fi">Science Fiction</option>
            </Form.Select>
          </FloatingLabel>

          <Form.Group className="mb-4">
            <Form.Label className="duration-label">
              Movie Duration:{" "}
              <span className="duration-value">{movie.duration} minutes</span>
            </Form.Label>

            <div className="duration-presets">
              <button
                type="button"
                className={`preset-btn ${movie.duration === 90 ? "active" : ""}`}
                onClick={() => setMovie({ ...movie, duration: 90 })}
              >
                90 min
              </button>
              <button
                type="button"
                className={`preset-btn ${movie.duration === 120 ? "active" : ""}`}
                onClick={() => setMovie({ ...movie, duration: 120 })}
              >
                120 min
              </button>
              <button
                type="button"
                className={`preset-btn ${movie.duration === 150 ? "active" : ""}`}
                onClick={() => setMovie({ ...movie, duration: 150 })}
              >
                150 min
              </button>
            </div>

            <div className="custom-duration">
              <button
                type="button"
                className="duration-control"
                onClick={() =>
                  setMovie({
                    ...movie,
                    duration: Math.max(60, movie.duration - 5),
                  })
                }
                disabled={movie.duration <= 60}
              >
                −
              </button>
              <input
                type="number"
                className="duration-input"
                name="duration"
                min={60}
                max={180}
                value={movie.duration}
                onChange={handleChange}
              />
              <button
                type="button"
                className="duration-control"
                onClick={() =>
                  setMovie({
                    ...movie,
                    duration: Math.min(180, movie.duration + 5),
                  })
                }
                disabled={movie.duration >= 180}
              >
                +
              </button>
            </div>

            <div className="duration-range">
              <div className="range-track">
                <div
                  className="range-fill"
                  style={{
                    width: `${((movie.duration - 60) / (180 - 60)) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </Form.Group>

          <div className="submit-wrapper">
            <Button type="submit" className="submit-btn">
              Add Movie
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}

export default MovieForm;
