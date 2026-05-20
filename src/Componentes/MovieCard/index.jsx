const MovieCard = ({ pelicula }) => {

  return (

    <div className="movie-card">

      <img
        src={
          pelicula.Poster !== "N/A"
            ? pelicula.Poster
            : "https://via.placeholder.com/300x450"
        }
        alt={pelicula.Title}
      />

      <h2>{pelicula.Title}</h2>

      <p>Año: {pelicula.Year}</p>

      <p>Tipo: {pelicula.Type}</p>

    </div>

  );
};

export default MovieCard;