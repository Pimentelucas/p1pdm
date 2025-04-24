import React, { Component } from 'react';
import { Chart } from 'primereact/chart/';

export default class GraficoEstados extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: [],
        datasets: []
      },
      chartOptions: {
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
              color: '#f1f1f1'
            }
          },
          title: {
            display: true,
            text: 'Buscas por Estado (UF)',
            font : {
              size: 18
            },
            color: '#f0f0f0'
          }
        }
      }
    };
  }

  componentDidMount() {
    this.atualizarGrafico(this.props.localidades);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.localidades !== this.props.localidades) {
      this.atualizarGrafico(this.props.localidades);
    }
  }

  contarEstados(localidades) {
    const contagem = {};
    localidades.forEach(local => {
      const estado = local.uf;
      contagem[estado] = (contagem[estado] || 0) + 1;
    });
    return contagem;
  }

  atualizarGrafico(localidades) {
    const documentStyle = getComputedStyle(document.documentElement);
    const estados = this.contarEstados(localidades);
    const cores = [
      '--orange-500', '--purple-500', '--teal-500',
      '--indigo-500', '--lime-500', '--bluegray-500'
    ];
    const hoverCores = [
      '--orange-400', '--purple-400', '--teal-400',
      '--indigo-400', '--lime-400', '--bluegray-400'
    ];

    this.setState({
      chartData: {
        labels: Object.keys(estados),
        datasets: [
          {
            data: Object.values(estados),
            backgroundColor: Object.keys(estados).map((_, i) =>
              documentStyle.getPropertyValue(cores[i % cores.length])
            ),
            hoverBackgroundColor: Object.keys(estados).map((_, i) =>
              documentStyle.getPropertyValue(hoverCores[i % hoverCores.length])
            )
          }
        ]
      }
    });
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