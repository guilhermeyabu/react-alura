import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Autores</th>
                <th>Livros</th>
                <th>Preços</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.autores.map((autor, index) => {
        return (
            <tr key={index}>
                <td>{autor.nome}</td>
                <td>{autor.livro}</td>
                <td>{autor.preco}</td>
                <td><button className="waves-effect waves-light btn indigo lighten-2" onClick={() => props.removerAutor(index)}>Remover</button></td>
            </tr>
        )
    });

    return (
        <tbody>
            {rows}
        </tbody>
    )

}

class Tabela extends Component {
    render() {

        const { autores, removerAutor } = this.props;

        return (
            <table className="centered highlight">
                <TableHeader />
                <TableBody autores={autores} removerAutor={removerAutor} />
            </table>
        );
    }
}

export default Tabela;