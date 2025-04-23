import React from 'react';
import Busca from './components/Busca';
import LocalidadeLista from './components/LocalidadeLista';
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'
import cepClient from "./utils/cepClient.js"

const App = () => {
  const onBuscaRealizada = (cep) => {
    if (cep == "") {
      alert("CEP inválido!")
      return
    }

    let validacep = /^[0-9]{8}$/;
    if (!validacep.test(cep)) {
      alert("CEP inválido!")
      return
    }

    cepClient.get(`${cep}/json/`)
    .then(response => {
      console.log(response.data)

      if (response.data.erro) {
        alert("CEP não encontrado!")
        return
      }

      this.setState({localidades: [response.data, ...this.state.localidades]})
    })
    
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