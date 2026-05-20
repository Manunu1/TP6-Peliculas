import MovieCard from "../MovieCard";

const MovieList = ({ peliculas }) => {

  return (
    <div className="movie-list">

      {peliculas.map((pelicula) => (

        <MovieCard
          key={pelicula.imdbID}
          pelicula={pelicula}
        />

      ))}

    </div>
  );
};

export default MovieList;