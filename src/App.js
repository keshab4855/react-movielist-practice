import "./App.css";
import { Container } from "react-bootstrap";
import SeacrhForm from "./components/SeacrhForm";
import CustomCard from "./components/CustomCard";
import MovieList from "./components/MovieList";
import { useState } from "react";

function App() {
  const [searchMovies, setSearchMovies] = useState("");
  const handleOnSubmit = (str) => {
    setSearchMovies(str);
    console.log(searchMovies);
  };
  return (
    <div className="wrapper">
      <Container>
        <SeacrhForm handleOnSubmit={handleOnSubmit}></SeacrhForm>
        <CustomCard></CustomCard>
        <hr />
        <MovieList></MovieList>
      </Container>
    </div>
  );
}

export default App;
