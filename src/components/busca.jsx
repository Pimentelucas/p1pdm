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
      alert("Você digitou o seguinte CEP: " + this.state.termoDeBusca)
      this.props.onBuscaRealizada(this.state.termoDeBusca)
    }
  
    render() {
      return (
        <form onSubmit={this.onFormSubmit}>
          <div className='flex flex-column'>
            <IconField iconPosition='left'>
              <InputIcon className='pi pi-search'></InputIcon>
              <InputText
                className='w-full'
                placeholder={this.props.dica}
                value={this.state.termoDeBusca}
                onChange={this.onTermoAlterado}
              />
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