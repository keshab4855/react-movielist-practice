import "./App.css";
import { Alert, Container } from "react-bootstrap";
import SeacrhForm from "./components/SeacrhForm";
import CustomCard from "./components/CustomCard";
import MovieList from "./components/MovieList";
import { useState } from "react";
import { fetchMovieInfo } from "./helpers/axiosHelper";

function App() {
  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState([]);
  const addMovieToList = (movieObj) => {
    setMovies({
      ...movies,
      movieObj,
    });
    console.log(movies);
  };
  const handleOnSubmit = async (str) => {
    const result = await fetchMovieInfo(str);

    setMovie(result);
  };

  return (
    <div className="wrapper">
      <Container>
        <SeacrhForm handleOnSubmit={handleOnSubmit}></SeacrhForm>
        {movie.imdbID ? (
          <CustomCard movie={movie}></CustomCard>
        ) : (
          <Alert variant="danger" className="mt-5">
            No movies Found
          </Alert>
        )}
        <hr />
        {movie.imdbID && <MovieList></MovieList>}
      </Container>
    </div>
  );
}

export default App;
