import React from 'react';

function Header() {
    return (
        <nav>
            <div class="nav-wrapper indigo lighten-2">
                <a href="/logo" class="brand-logo">Casa do Código</a>
                <ul class="right">
                    <li><a href="/autores">Autores</a></li>
                    <li><a href="/livros">Livros</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;