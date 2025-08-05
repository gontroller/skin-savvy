import React, { useState } from 'react';
import { FiShoppingCart, FiStar, FiHeart, FiEye, FiZap, FiImage } from 'react-icons/fi';
import './products.css';

// 🎯 Dados tipados
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  badge?: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos', icon: <FiZap /> },
    { id: 'cleansers', name: 'Limpeza', icon: <FiZap /> },
    { id: 'moisturizers', name: 'Hidratantes', icon: <FiZap /> },
    { id: 'serums', name: 'Sérum', icon: <FiZap /> },
    { id: 'masks', name: 'Máscaras', icon: <FiZap /> }
  ];

  // 🎯 Dados tipados com imagens corretas
  const products: Product[] = [
    {
      id: 1,
      name: "Chill Mask",
      description: "Limpeza profunda sem ressecar a pele. Ideal para todos os tipos de pele.",
      price: 89.90,
      originalPrice: 119.90,
      image: "/images/products/aplicação-mockup_2.png", // 🎯 IMAGEM CORRETA
      category: "cleansers",
      badge: "Mais Vendido",
      rating: 4.9,
      reviews: 1247,
      inStock: true
    },
    {
      id: 2,
      name: "Sun Breeze",
      description: "Hidratação intensa com ácido hialurônico. 24h de hidratação.",
      price: 129.90,
      originalPrice: 159.90,
      image: "/images/products/aplicação-mockup_3.png", // 🎯 IMAGEM CORRETA
      category: "moisturizers",
      badge: "Novo",
      rating: 4.8,
      reviews: 892,
      inStock: true
    },
    {
      id: 3,
      name: "Polish Me",
      description: "Clareamento e uniformização da pele. Antioxidante poderoso.",
      price: 149.90,
      originalPrice: 189.90,
      image: "/images/products/aplicação-mockup_4.png", // 🎯 IMAGEM CORRETA
      category: "serums",
      badge: "Promoção",
      rating: 4.7,
      reviews: 1563,
      inStock: true
    },
    {
      id: 4,
      name: "Clear Skin Jam",
      description: "Tratamento intensivo para pele ressecada. Resultado imediato.",
      price: 69.90,
      originalPrice: 89.90,
      image: "/images/products/aplicação-mockup_4.png", // 🎯 IMAGEM CORRETA
      category: "masks",
      badge: "Oferta",
      rating: 4.6,
      reviews: 734,
      inStock: false
    },
    {
      id: 5,
      name: "Soft Touch",
      description: "Renovação celular suave. Remove células mortas sem agredir.",
      price: 79.90,
      originalPrice: 99.90,
      image: "/images/products/aplicação-mockup_5.png", // 🎯 IMAGEM CORRETA
      category: "cleansers",
      badge: "Popular",
      rating: 4.5,
      reviews: 567,
      inStock: true
    },
    {
      id: 6,
      name: "Skin Boost",
      description: "Proteção UVA/UVB com toque seco. Não deixa aspecto oleoso.",
      price: 99.90,
      originalPrice: 129.90,
      image: "/images/products/aplicação-mockup_6.png", // 🎯 IMAGEM CORRETA (pulando o 6)
      category: "moisturizers",
      badge: "Essencial",
      rating: 4.9,
      reviews: 2103,
      inStock: true
    },
    // 🎯 Novo produto adicionado
    {
      id: 7,
      name: "Clean Bloom",
      description: "Regeneração celular durante o sono. Ingredientes ativos para renovação da pele.",
      price: 179.90,
      originalPrice: 219.90,
      image: "/images/products/aplicação-mockup_7.png", // 🎯 IMAGEM CORRETA (pulando o 6)
      category: "moisturizers",
      badge: "Premium",
      rating: 4.9,
      reviews: 892,
      inStock: true
    },
    // 🎯 Produtos adicionais para usar todas as imagens disponíveis
    {
      id: 8,
      name: "Tone&Treat",
      description: "Reduz rugas e linhas de expressão. Peptídeos e retinol.",
      price: 199.90,
      originalPrice: 249.90,
      image: "/images/products/aplicação-mockup_8.png",
      category: "serums",
      badge: "Revolucionário",
      rating: 4.9,
      reviews: 1567,
      inStock: true
    },
    {
      id: 9,
      name: "Glass Glow",
      description: "Desintoxicação profunda. Remove impurezas e controla oleosidade.",
      price: 89.90,
      originalPrice: 119.90,
      image: "/images/products/aplicação-mockup_9.png",
      category: "masks",
      badge: "Detox",
      rating: 4.7,
      reviews: 892,
      inStock: true
    },
    {
      id: 10,
      name: "Duo Peach Sleep + Under Glow",
      description: "Desintoxicação profunda. Remove impurezas e controla oleosidade.",
      price: 89.90,
      originalPrice: 119.90,
      image: "/images/products/aplicação-mockup_10.png",
      category: "masks",
      badge: "Detox",
      rating: 4.7,
      reviews: 892,
      inStock: true
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  // Componente de imagem com fallback
  const ProductImage: React.FC<{ product: Product }> = ({ product }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    const handleImageError = () => {
      setImageError(true);
    };

    return (
      <div className="product-image">
        {/* Imagem Real */}
        {!imageError && (
          <img
            src={product.image}
            alt={`${product.name} - Skin Savvy`}
            className={`product-real-image ${imageLoaded ? 'loaded' : ''}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy" // Lazy loading para performance
          />
        )}

        {/* Placeholder enquanto carrega ou se der erro */}
        {(!imageLoaded || imageError) && (
          <div className="product-image-placeholder">
            <div className="product-bottle-placeholder">
              <FiImage className="placeholder-icon" />
            </div>
          </div>
        )}

        {/* Overlay de Ações */}
        <div className="product-overlay">
          <button className="overlay-btn" title="Ver detalhes">
            <FiEye />
          </button>
          <button className="overlay-btn" title="Adicionar aos favoritos">
            <FiHeart />
          </button>
        </div>

        {/* Indicador de Estoque */}
        {!product.inStock && (
          <div className="stock-indicator">
            <span>Esgotado</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="products">
      <div className="container">
        {/* Header da Seção */}
        <div className="products-header">
          <div className="products-badge">
            <FiZap className="badge-icon" />
            <span>Produtos em Destaque</span>
          </div>
          
          <h2 className="products-title">
            Descubra nossa{' '}
            <span className="products-title-highlight">linha completa</span>
          </h2>
          
          <p className="products-subtitle">
            Produtos formulados com ingredientes naturais e tecnologia avançada 
            para transformar sua pele de forma segura e eficaz.
          </p>
        </div>

        {/* Filtros de Categoria */}
        <div className="products-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Grid de Produtos */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              {/* Badge de Destaque */}
              {product.badge && (
                <div className="product-badge">
                  {product.badge}
                </div>
              )}

              {/* Imagem do Produto */}
              <ProductImage product={product} />

              {/* Informações do Produto */}
              <div className="product-info">
                <h3 className="product-name">
                  {product.name}
                </h3>
                
                <p className="product-description">
                  {product.description}
                </p>

                {/* Avaliações */}
                <div className="product-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, index) => (
                      <FiStar 
                        key={index} 
                        className={index < Math.floor(product.rating) ? 'star-filled' : 'star-empty'} 
                      />
                    ))}
                  </div>
                  <span className="rating-text">
                    {product.rating} ({product.reviews} avaliações)
                  </span>
                </div>

                {/* Preços */}
                <div className="product-pricing">
                  <div className="price-current">
                    {formatPrice(product.price)}
                  </div>
                  {product.originalPrice > product.price && (
                    <div className="price-original">
                      {formatPrice(product.originalPrice)}
                    </div>
                  )}
                </div>

                {/* Call-to-Action */}
                <button 
                  className={`btn ${product.inStock ? 'btn-primary' : 'btn-disabled'}`}
                  disabled={!product.inStock}
                >
                  <FiShoppingCart className="btn-icon" />
                  {product.inStock ? 'Adicionar ao Carrinho' : 'Indisponível'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Final */}
        <div className="products-cta">
          <h3 className="cta-title">
            Não encontrou o que procurava?
          </h3>
          
          <p className="cta-subtitle">
            Nossa equipe está pronta para ajudar você a encontrar os produtos ideais para sua pele
          </p>
          
          <button className="btn btn-secondary btn-lg">
            Falar com Especialista
            <FiZap className="btn-icon" />
          </button>
        </div>
      </div>

      {/* Background Decorativo */}
      <div className="products-background">
        <div className="products-shapes">
          <div className="product-shape shape-1"></div>
          <div className="product-shape shape-2"></div>
          <div className="product-shape shape-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Products; 