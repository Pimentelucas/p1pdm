import React, { Component } from 'react';
import Busca from './components/Busca';
import LocalidadeLista from './components/LocalidadeLista';
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'
import cepClient from "./utils/cepClient.js"
import GraficoEstados from './components/GraficoEstados.jsx';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      localidades: []
    }
  }

  // state = {
  //   localidades: null
  // }
  
  onBuscaRealizada = (cep) => {
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

  render() {
    return (
      <div className="p-4">
        <h2>Hello, P1</h2>
        <Busca onBuscaRealizada={this.onBuscaRealizada} />
        <LocalidadeLista localidades={this.state.localidades}/>
        <GraficoEstados localidades={this.state.localidades} />
      </div>
    );

  }
};
