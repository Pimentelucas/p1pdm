import React from 'react';
import { Card } from 'primereact/card';

const LocalidadeLista = ({ localidades }) => {
  return (
    <div className="grid gap-4">
      {localidades.map((local, index) => (
        <Card
          key={index}
          title={local.cep}
          className="shadow-md rounded-2xl border border-gray-200 p-4 text-sm"
        >
          <p className="font-medium text-gray-800">{local.logradouro}</p>
          <p className="text-gray-600">{local.bairro}</p>
          <p className="text-gray-500">{local.localidade} - {local.uf}</p>
        </Card>
      ))}
    </div>
  );
};

export default LocalidadeLista;
