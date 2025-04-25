import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'

export default class Busca extends Component {
  state = {
    termoDeBusca: ''
  }

  onTermoAlterado = (event) => {
    this.setState({ termoDeBusca: event.target.value })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onBuscaRealizada(this.state.termoDeBusca)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="space-y-3">
        <div className='flex flex-col gap-2'>
          <IconField iconPosition='left' className="w-full">
            <InputIcon className='pi pi-search' />
            <InputText
              id="inputCep"
              className="w-full p-inputtext-sm"
              onChange={this.onTermoAlterado}
              value={this.state.termoDeBusca}
              placeholder={this.props.dica}
            />
          </IconField>
          <Button
            type="submit"
            label="OK"
            className="w-full p-button-sm"
            outlined
          />
        </div>
      </form>
    )
  }
}

Busca.defaultProps = {
  dica: 'Digite um CEP'
}