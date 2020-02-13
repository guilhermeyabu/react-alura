import React, { Component } from 'react';
import './App.css';
import Tabela from './Tabela';

class App extends Component {

  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: 'R$1000'
      },
      {
        nome: 'Yabu',
        livro: 'Android',
        preco: 'R$100'
      },
      {
        nome: 'Gabi',
        livro: 'Java',
        preco: 'R$150'
      },
      {
        nome: 'Xablau',
        livro: 'Burgão',
        preco: 'R$10'
      },
      {
        nome: 'EEEitaaaa',
        livro: 'Burgão',
        preco: 'R$10'
      }
    ]
  }

  removerAutor = (index) => {
    const { autores } = this.state;

    this.setState({ 
      autores: autores.filter((autor, posAtual) => {
        return posAtual !== index;
      }),
    }
    );
  }

  render() {
    return (
      <div className="App" >
        <Tabela autores={this.state.autores} removerAutor={this.removerAutor} />
      </div>
    );
  }
}

export default App;
