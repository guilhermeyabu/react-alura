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

    criarNovoAutor = () => {
        this.props.addAutor(this.state);
        this.setState(this.initialState)
    }

    render() {

        const { nome, livro, preco } = this.state;

        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label htmlFor="nome">Nome</label>
                        <input
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.inputListener}
                        />
                    </div>

                    <div className="input-field col s4">
                        <label htmlFor="livro">Livro</label>
                        <input
                            id="livro"
                            type="text"
                            name="livro"
                            value={livro}
                            onChange={this.inputListener}
                        />
                    </div>

                    <div className="input-field col s4">
                        <label htmlFor="preco">Preço</label>
                        <input
                            id="preco"
                            type="text"
                            name="preco"
                            value={preco}
                            onChange={this.inputListener}
                        />
                    </div>

                    <button className="waves-effect waves-light btn indigo lighten-2"onClick={this.criarNovoAutor} type="button">Salvar</button>
                </div>
            </form>
        );
    }

}

export default Form;