import React from 'react';
import { Card } from 'primereact/card';

const LocalidadeLista = ({localidades}) => {
  // const localidades = [
  //   {
  //     cep: '04094-050',
  //     endereco: 'Avenida Pedro Álvares Cabral',
  //     bairro: 'Parque Ibirapuera',
  //     cidade: 'São Paulo',
  //     estado: 'SP'
  //   },
  //   {
  //       cep: '55592-970',
  //       endereco: 'Rua dos Navegantes',
  //       bairro: 'Vila de Porto de Galinhas',
  //       cidade: 'Ipojuca',
  //       estado: 'PE'
  //   }
  // ];

  return (
    <div className="grid gap-3 mt-4">
      {localidades.map((local, index) => (
        <Card key={index} title={local.cep} className="shadow-2">
          <p>{local.logradouro}</p>
          <p>{local.bairro}</p>
          <p>{local.localidade} - {local.uf}</p>
        </Card>
      ))}
    </div>
  );
};

export default LocalidadeLista;

