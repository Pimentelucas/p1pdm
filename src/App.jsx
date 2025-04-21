import React from 'react';
import Busca from './components/Busca';
import LocalidadeLista from './components/LocalidadeLista';
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'

const App = () => {
  const onBuscaRealizada = (cep) => {
    console.log("CEP buscado:", cep);
  };

  return (
    <div className="p-4">
      <h2>Hello, P1</h2>
      <Busca onBuscaRealizada={onBuscaRealizada} />
      <LocalidadeLista />
    </div>
  );
};

export default App;