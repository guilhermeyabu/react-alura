import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props)

        this.initialState = {
            nome: '',
            livro: '',
            preco: '',
        }

        this.state = this.initialState;
    }

    inputListener = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {

        const {nome, livro, preco} = this.state;

        return (
            <form>
                <label htmlFor="nome">Nome</label>
                <input
                    id="nome"
                    type="text"
                    name="nome"
                    value={nome}
                    onChange = {this.inputListener}
                />

                <label htmlFor="livro">Livro</label>
                <input
                    id="livro"
                    type="text"
                    name="livro"
                    value={livro}
                    onChange = {this.inputListener}
                />

                <label htmlFor="preco">Preço</label>
                <input
                    id="preco"
                    type="text"
                    name="preco"
                    value={preco}
                    onChange = {this.inputListener}
                />

                <button>Salvar</button>
            </form>
        );
    }

}

export default Form;