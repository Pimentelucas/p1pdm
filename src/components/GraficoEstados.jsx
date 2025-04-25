import React from 'react';
import { Chart } from 'primereact/chart';

const GraficoEstados = ({ localidades }) => {
    const contagem = {};

    localidades.forEach(local => {
        const uf = local.uf;
        if (uf) contagem[uf] = (contagem[uf] || 0) + 1;
    })

    if (Object.keys(contagem).length === 0) return null;

    const data = {
      cores: [
        '#A5D8FF', '#FFC9C9', '#D0BFFF', '#C5F6FA', '#FFE066',
        '#B2F2BB', '#FFD8A8', '#F783AC', '#A9E34B', '#FF9F1C'
      ],
      HoverCores: [
        '#74C0FC', '#FFA8A8', '#B197FC', '#99E9F2', '#FFD43B',
        '#69DB7C', '#FFC078', '#F06595', '#94D82D', '#FF922B'
      ]
    }

    const estados = Object.keys(contagem);

    return (
        <div className="flex justify-content-center w-full mt-4">
            <div className="w-full md:w-30rem">
                <Chart type="pie" data={{
                    labels: estados,
                    datasets: [{
                        data: Object.values(contagem),
                        backgroundColor: estados.map((_, i) => data.cores[i % data.cores.length]),
                        hoverBackgroundColor: estados.map((_, i) => data.HoverCores[i % data.HoverCores.length])

                    }]
                }} />
            </div>
        </div>
    );
};

export default GraficoEstados;
