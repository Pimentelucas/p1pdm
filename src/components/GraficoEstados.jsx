import React, { Component } from 'react';
import { Chart } from 'primereact/chart/';

export default class GraficoEstados extends Component {
  constructor(props) {
    super(props);

    const documentStyle = getComputedStyle(document.documentElement);
    const estados = this.contarEstados(this.props.localidades);

    this.state = {
      chartData: {
        labels: Object.keys(estados),
        datasets: [
          {
            data: Object.values(estados),
            backgroundColor: [
              documentStyle.getPropertyValue('--blue-500'),
              documentStyle.getPropertyValue('--yellow-500'),
              documentStyle.getPropertyValue('--green-500'),
              documentStyle.getPropertyValue('--red-500'),
              documentStyle.getPropertyValue('--pink-500'),
              documentStyle.getPropertyValue('--cyan-500')
            ],
            hoverBackgroundColor: [
              documentStyle.getPropertyValue('--blue-400'),
              documentStyle.getPropertyValue('--yellow-400'),
              documentStyle.getPropertyValue('--green-400'),
              documentStyle.getPropertyValue('--red-400'),
              documentStyle.getPropertyValue('--pink-400'),
              documentStyle.getPropertyValue('--cyan-400')
            ]
          }
        ]
      },
      chartOptions: {
        plugins: {
          legend: {
            labels: {
              usePointStyle: true
            }
          }
        }
      }
    };
  }

  contarEstados(localidades) {
    const contagem = {};
    localidades.forEach(local => {
      const estado = local.uf;
      if (contagem[estado]) {
        contagem[estado]++;
      } else {
        contagem[estado] = 1;
      }
    });
    return contagem;
  }

  render() {
    return (
      <div className="card flex justify-content-center mt-4">
        <Chart
          type="pie"
          data={this.state.chartData}
          options={this.state.chartOptions}
          className="w-full md:w-30rem"
        />
      </div>
    );
  }
}
