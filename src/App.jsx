import { useState } from "react";
import "./App.css";

import SearchBar from './Componentes/SearchBar'
import MovieList from "./Componentes/MovieList";
import Loader from "./Componentes/Loader";
import ErrorMessage from "./Componentes/ErrorMessage";

function App() {

  const [busqueda, setBusqueda] = useState("");
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="container">

      <h1>Buscador IMDb</h1>

      <SearchBar
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        setPeliculas={setPeliculas}
        setLoading={setLoading}
        setError={setError}
      />

      {loading && <Loader />}

      {error && <ErrorMessage error={error} />}

      <MovieList peliculas={peliculas} />

    </div>
  );
}

export default App;