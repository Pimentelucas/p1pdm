import React, { Component } from 'react';
import Busca from './components/Busca.jsx';
import LocalidadeLista from './components/LocalidadeLista';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import cepClient from "./utils/cepClient.js";
import GraficoEstados from './components/GraficoEstados.jsx';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localidades: []
    };
  }

  onBuscaRealizada = (cep) => {
    if (cep === "") {
      alert("CEP inválido!");
      return;
    }

    let validacep = /^[0-9]{8}$/;
    if (!validacep.test(cep)) {
      alert("CEP inválido!");
      return;
    }

    cepClient.get(`${cep}/json/`)
      .then(response => {
        if (response.data.erro) {
          alert("CEP não encontrado!");
          return;
        }

        this.setState({ localidades: [response.data, ...this.state.localidades] });
      });
  };

  render() {
    return (
      <div className="min-h-screen bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Busca de CEP</h2>
          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-6 w-full">
                <div className="w-full">
                  <Busca onBuscaRealizada={this.onBuscaRealizada} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-6">
                <LocalidadeLista localidades={this.state.localidades} />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-start pt-4">
              <div className="w-full max-w-2xl">
                <GraficoEstados localidades={this.state.localidades} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
