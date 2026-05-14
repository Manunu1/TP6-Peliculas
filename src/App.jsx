import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SearchBar from './Componentes/SearchBar'

function App() {
  const [busqueda, setBusqueda] = useState("");

  return (
    <>
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />
    </>
  );
}