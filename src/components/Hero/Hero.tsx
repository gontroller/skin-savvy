import React from 'react';
import { FiArrowRight, FiStar, FiUsers, FiAward } from 'react-icons/fi';
import './hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      {/* Background com gradiente */}
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Coluna da Esquerda - Conteúdo Principal */}
          <div className="hero-text">
            {/* Badge de destaque */}
            <div className="hero-badge">
              <FiStar className="badge-icon" />
              <span>#1 em Skincare no Brasil</span>
            </div>

            {/* Headline Principal */}
            <h1 className="hero-title">
              Transforme sua pele em{' '}
              <span className="hero-title-highlight">7 dias</span>
            </h1>

            {/* Subheadline */}
            <p className="hero-subtitle">
              Descubra os segredos dos dermatologistas para uma pele radiante, 
              hidratada e livre de imperfeições. Produtos testados e aprovados 
              por mais de 50.000 clientes.
            </p>

            {/* Call-to-Actions */}
            <div className="hero-cta">
              <button className="btn btn-primary btn-lg">
                Começar Agora
                <FiArrowRight className="btn-icon" />
              </button>
              <button className="btn btn-secondary btn-lg">
                Ver Produtos
              </button>
            </div>

            {/* Elementos de Confiança */}
            <div className="hero-trust">
              <div className="trust-item">
                <FiUsers className="trust-icon" />
                <span>50k+ Clientes Satisfeitos</span>
              </div>
              <div className="trust-item">
                <FiAward className="trust-icon" />
                <span>Certificado Dermatológico</span>
              </div>
              <div className="trust-item">
                <FiStar className="trust-icon" />
                <span>4.9/5 Avaliações</span>
              </div>
            </div>
          </div>

          {/* Coluna da Direita - Imagem/Ilustração */}
          <div className="hero-visual">
            <div className="hero-image-container">
              {/* 🎯 IMAGEM REAL DO PRODUTO */}
              <div className="hero-image-placeholder">
                {/* 🎯 REMOVIDO: product-showcase, product-bottle, product-glow */}
              </div>
              
              {/* Badges flutuantes */}
              <div className="floating-badge badge-1">
                <span>Natural</span>
              </div>
              <div className="floating-badge badge-2">
                <span>Hipoalergênico</span>
              </div>
              <div className="floating-badge badge-3">
                <span>Vegan</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
        <span>Role para descobrir</span>
      </div>
    </section>
  );
};

export default Hero; 