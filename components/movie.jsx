import Card from "react-bootstrap/Card";

const Movie = ({ movieName, duration, genre }) => {
  return (
    <Card className="movie-card">
      <Card.Body>
        <Card.Title className="movie-title">{movieName}</Card.Title>

        <Card.Subtitle className="movie-genre">{genre}</Card.Subtitle>

        <Card.Text className="movie-duration">
          Duration: <span>{duration} min</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Movie;
