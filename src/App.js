import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Autores</th>
            <th>Livros</th>
            <th>Preços</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Paulo</td>
            <td>React</td>
            <td>R$1000</td>
            <td><button>Remover</button></td>
          </tr>
          <tr>
            <td>Yabu</td>
            <td>React</td>
            <td>R$1000</td>
            <td><button>Remover</button></td>
          </tr>
          <tr>
            <td>Gabi</td>
            <td>React</td>
            <td>R$1000</td>
            <td><button>Remover</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
