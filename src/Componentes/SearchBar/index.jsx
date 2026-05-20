import axios from "axios";

const SearchBar = ({
  busqueda,
  setBusqueda,
  setPeliculas,
  setLoading,
  setError,
}) => {

  const buscarPelicula = async (e) => {

    e.preventDefault();

    if (busqueda.trim() === "") {
      return;
    }

    try {

      setLoading(true);

      setError("");

      const response = await axios.get(`https://www.omdbapi.com/?apikey=cc8035c7&s=${busqueda}`);

      console.log(response.data);

      if (response.data.Response === "False") {

        setPeliculas([]);

        setError(response.data.Error);

      } else {

        setPeliculas(response.data.Search);

      }

    } catch (error) {

      console.log(error);

      setError("Ocurrió un error al buscar películas");

    } finally {

      setLoading(false);

    }
  };

  return (
    <form onSubmit={buscarPelicula}>

      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar película..."
      />

      <button type="submit">
        Buscar
      </button>

    </form>
  );
};

export default SearchBar;