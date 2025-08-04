import React from 'react';
import { FiShield, FiZap, FiHeart, FiStar, FiUsers, FiAward } from 'react-icons/fi';
import './benefits.css';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <FiShield />,
      title: "100% Natural",
      description: "Produtos formulados com ingredientes naturais, livres de parabenos, sulfatos e fragrâncias sintéticas.",
      color: "var(--color-success)"
    },
    {
      icon: <FiZap />,
      title: "Resultados Rápidos",
      description: "Veja a diferença em apenas 7 dias. Nossa fórmula avançada age rapidamente para transformar sua pele.",
      color: "var(--color-cta)"
    },
    {
      icon: <FiHeart />,
      title: "Dermatologicamente Testado",
      description: "Todos os produtos são testados e aprovados por dermatologistas, garantindo segurança e eficácia.",
      color: "var(--color-primary)"
    },
    {
      icon: <FiStar />,
      title: "Qualidade Premium",
      description: "Ingredientes de alta qualidade selecionados cuidadosamente para oferecer o melhor para sua pele.",
      color: "var(--color-accent)"
    }
  ];

  const stats = [
    {
      number: "50k+",
      label: "Clientes Satisfeitos",
      icon: <FiUsers />
    },
    {
      number: "4.9/5",
      label: "Avaliação Média",
      icon: <FiStar />
    },
    {
      number: "98%",
      label: "Taxa de Sucesso",
      icon: <FiAward />
    }
  ];

  return (
    <section className="benefits">
      <div className="container">
        {/* Header da Seção */}
        <div className="benefits-header">
          <div className="benefits-badge">
            <FiStar className="badge-icon" />
            <span>Por que escolher Skin Savvy?</span>
          </div>
          
          <h2 className="benefits-title">
            Transforme sua pele com{' '}
            <span className="benefits-title-highlight">tecnologia avançada</span>
          </h2>
          
          <p className="benefits-subtitle">
            Descubra os diferenciais que fazem da Skin Savvy a escolha certa 
            para quem busca resultados reais e duradouros.
          </p>
        </div>

        {/* Cards de Benefícios */}
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="benefit-card"
              style={{ '--card-color': benefit.color } as React.CSSProperties}
            >
              <div className="benefit-icon">
                {benefit.icon}
              </div>
              
              <h3 className="benefit-title">
                {benefit.title}
              </h3>
              
              <p className="benefit-description">
                {benefit.description}
              </p>
              
              <div className="benefit-glow"></div>
            </div>
          ))}
        </div>

        {/* Estatísticas */}
        <div className="benefits-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">
                {stat.icon}
              </div>
              
              <div className="stat-content">
                <div className="stat-number">
                  {stat.number}
                </div>
                <div className="stat-label">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="benefits-cta">
          <h3 className="cta-title">
            Pronto para transformar sua pele?
          </h3>
          
          <p className="cta-subtitle">
            Junte-se a mais de 50.000 pessoas que já descobriram o poder da Skin Savvy
          </p>
          
          <button className="btn btn-primary btn-lg">
            Começar Minha Transformação
            <FiZap className="btn-icon" />
          </button>
        </div>
      </div>

      {/* Background Decorativo */}
      <div className="benefits-background">
        <div className="benefits-shapes">
          <div className="benefit-shape shape-1"></div>
          <div className="benefit-shape shape-2"></div>
          <div className="benefit-shape shape-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Benefits; 