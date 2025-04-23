import React, { Component } from 'react'
import {Button} from 'primereact/button'
import {IconField} from 'primereact/iconfield'
import {InputIcon} from 'primereact/inputicon'
import {InputText} from 'primereact/inputtext'

export default class Busca extends Component {
    state = {
      termoDeBusca: ''
    }
  
    onTermoAlterado = (event) => {
      this.setState({ termoDeBusca: event.target.value })
    }
  
    onFormSubmit = (event) => {
      event.preventDefault()
      // alert("Você digitou o seguinte CEP: " + this.state.termoDeBusca)
      this.props.onBuscaRealizada(this.state.termoDeBusca)
    }
  
    render() {
      return (
        <form onSubmit={this.onFormSubmit}>
          <div className='flex flex-column'>
            <IconField iconPosition='left'>
              <InputIcon className='pi pi-search'></InputIcon>
              <InputText
                id="inputCep" className="w-full" onChange={this.onTermoAlterado} value={this.state.termoDeBusca}
                placeholder={this.props.dica}
              />
                <label htmlFor="inputCep"></label>
            </IconField>
            <Button
              type="submit"
              label="OK"
              outlined
            />
          </div>
        </form>
      )
    }
  }
  
  Busca.defaultProps = {
    dica: 'Digite o CEP desejado...'
  }