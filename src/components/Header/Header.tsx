import React from "react";
import './Header.css';

function Header() {
    return (
        <header className="header-container">
            <div className="logo">
                Skin Savvy
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="#products">Produtos</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;