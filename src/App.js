import "./App.css";
import { Container } from "react-bootstrap";
import SeacrhForm from "./components/SeacrhForm";
import CustomCard from "./components/CustomCard";
import MovieList from "./components/MovieList";
import { useState } from "react";
import { fetchMovieInfo } from "./helpers/axiosHelper";

function App() {
  const [movie, setMovie] = useState({});
  const handleOnSubmit = async (str) => {
    const result = await fetchMovieInfo(str);

    setMovie(result);
  };

  return (
    <div className="wrapper">
      <Container>
        <SeacrhForm handleOnSubmit={handleOnSubmit}></SeacrhForm>
        {movie.imdbID && <CustomCard movie={movie}></CustomCard>}
        <hr />
        <MovieList></MovieList>
      </Container>
    </div>
  );
}

export default App;
