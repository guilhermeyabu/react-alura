import React from 'react';
import './App.css';
import Tabela from './Tabela';

function App() {
  const autores = [
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
    }
  ];

  return (
    <div className="App">
      <Tabela autores={autores} />
    </div>
  );
}

export default App;
