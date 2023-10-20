import logo from './logo.svg';
import './App.css';
import React from 'react';
// importar componente de testimonio
import Testimonio from './componentes/Testimonio';
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>  
        <h1>Testimonio</h1>
        <Testimonio
          nombre='Luffy'
          imagen='luffy'
          alt-nombre='Monkey D. Luffy'
          pais='Japón'
          cargo='Capitán'
          empresa='Sombrero de Paja'
          testimonio='¡Quiero ser el rey de los piratas!'
        />
        <Testimonio
          nombre='Zoro'
          imagen='zoro'
          alt-nombre='Roronoa Zoro'
          pais='Japón'
          cargo='Espadachín'
          empresa='Sombrero de Paja'
          testimonio='¡Quiero ser el mejor espadachín del mundo!'
        />
        <Testimonio
          nombre='Sanji'
          pais='Japón'
          cargo='Cocinero'
          alt-nombre='Vinsmoke Sanji'
          imagen='sanji'
          empresa='Sombrero de Paja'
          testimonio='¡Quiero encontrar el All Blue!'
        />
      </div>  

    </div>
  );
}

export default App;
