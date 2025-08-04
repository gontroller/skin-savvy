import React, { useState } from 'react';
import { FiMenu, FiShoppingCart, FiX } from "react-icons/fi";
import './header.css';

function Header() {
    // Criando o estado
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    //alterar o estado do menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
        <header className='header-container'>
            <div className='header-left'>
                <button onClick={toggleMenu} className='icon-button'>
                    <FiMenu size={24} />
                </button>
            </div>

            {/* Coluna da Esquerda */}
            <div className='logo-container'>
                <div className='logo'>Skin Savvy</div>
            </div>

            {/* Coluna da Direita */}
            <div className='header-right'>
                <button className='icon-button'>
                    <FiShoppingCart size={24} />
                </button>
            </div>
        </header>

        {/* Menu de navegacao */}
        <nav className={`navigation-menu ${isMenuOpen ? 'open' : ''}`}>
            <div className='navigation-header'>
                <span>Navegacao</span>
                <button onClick={toggleMenu} className='icon-button'>
                    <FiX size={24} />
                </button>
            </div>
            <ul>
                <li><a href='#products' onClick={toggleMenu}>Produtos</a></li>
                <li><a href='#about' onClick={toggleMenu}>Sobre</a></li>
                <li><a href='#contact' onClick={toggleMenu}>Contato</a></li>
            </ul>
        </nav>
    </>
    );
}

export default Header;