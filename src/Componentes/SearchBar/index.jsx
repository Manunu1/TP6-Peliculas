import { useState } from "react";

const SearchBar = (busqueda, setBusqueda) => {


    const buscarPelicula = async (e) => {
        e.preventDefault();
        
        const response = await axios.get(`https://www.omdbapi.com/?apikey=cc8035c7&s=${busqueda}`)
    }


    return (
        <>
            <form onSubmit={buscarPelicula}>
                <input
                    type="text"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    placeholder="Buscar pelicula..."
                />
                <button type="submit">Buscar</button>
            </form>
        </>
    );

}
export default SearchBar;
//cc8035c7