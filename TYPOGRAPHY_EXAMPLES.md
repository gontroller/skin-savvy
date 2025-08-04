# 🎨 Exemplos de Aplicação da Tipografia - Skin Savvy

## 📋 Como Aplicar as Classes de Tipografia

Este guia mostra como aplicar as classes de hierarquia tipográfica nos componentes do projeto, mantendo a consistência visual.

## 🎯 Exemplos por Componente

### **1. Hero Component**

```jsx
// ❌ Antes (estilos inline)
<h1 className="hero-title">
  Transforme sua pele em{' '}
  <span className="hero-title-highlight">7 dias</span>
</h1>

// ✅ Depois (usando classes de hierarquia)
<h1 className="headline-1">
  Transforme sua pele em{' '}
  <span className="headline-1 text-primary">7 dias</span>
</h1>

// ❌ Antes
<p className="hero-subtitle">
  Descubra os segredos dos dermatologistas...
</p>

// ✅ Depois
<p className="body-large">
  Descubra os segredos dos dermatologistas...
</p>

// ❌ Antes
<div className="hero-badge">
  <FiStar className="badge-icon" />
  <span>#1 em Skincare no Brasil</span>
</div>

// ✅ Depois
<div className="badge-text">
  <FiStar className="badge-icon" />
  <span>#1 em Skincare no Brasil</span>
</div>

// ❌ Antes
<button className="btn btn-primary btn-lg">
  Começar Agora
  <FiArrowRight className="btn-icon" />
</button>

// ✅ Depois
<button className="btn btn-primary btn-lg button-text">
  Começar Agora
  <FiArrowRight className="btn-icon" />
</button>
```

### **2. Benefits Component**

```jsx
// ❌ Antes
<h2 className="benefits-title">
  Transforme sua pele com{' '}
  <span className="benefits-title-highlight">tecnologia avançada</span>
</h2>

// ✅ Depois
<h2 className="headline-2">
  Transforme sua pele com{' '}
  <span className="headline-2 text-primary">tecnologia avançada</span>
</h2>

// ❌ Antes
<p className="benefits-subtitle">
  Descubra os diferenciais que fazem da Skin Savvy...
</p>

// ✅ Depois
<p className="body-large">
  Descubra os diferenciais que fazem da Skin Savvy...
</p>

// ❌ Antes
<h3 className="benefit-title">
  {benefit.title}
</h3>

// ✅ Depois
<h3 className="headline-4">
  {benefit.title}
</h3>

// ❌ Antes
<p className="benefit-description">
  {benefit.description}
</p>

// ✅ Depois
<p className="body-medium">
  {benefit.description}
</p>

// ❌ Antes
<div className="stat-number">
  {stat.number}
</div>

// ✅ Depois
<div className="headline-4 text-primary">
  {stat.number}
</div>

// ❌ Antes
<div className="stat-label">
  {stat.label}
</div>

// ✅ Depois
<div className="body-small">
  {stat.label}
</div>
```

### **3. Products Component**

```jsx
// ❌ Antes
<h2 className="products-title">
  Descubra nossa{' '}
  <span className="products-title-highlight">linha completa</span>
</h2>

// ✅ Depois
<h2 className="headline-2">
  Descubra nossa{' '}
  <span className="headline-2 text-primary">linha completa</span>
</h2>

// ❌ Antes
<p className="products-subtitle">
  Produtos formulados com ingredientes naturais...
</p>

// ✅ Depois
<p className="body-large">
  Produtos formulados com ingredientes naturais...
</p>

// ❌ Antes
<h3 className="product-name">
  {product.name}
</h3>

// ✅ Depois
<h3 className="headline-5">
  {product.name}
</h3>

// ❌ Antes
<p className="product-description">
  {product.description}
</p>

// ✅ Depois
<p className="body-medium">
  {product.description}
</p>

// ❌ Antes
<div className="price-current">
  {formatPrice(product.price)}
</div>

// ✅ Depois
<div className="price-text">
  {formatPrice(product.price)}
</div>

// ❌ Antes
<span className="rating-text">
  {product.rating} ({product.reviews} avaliações)
</span>

// ✅ Depois
<span className="rating-text">
  {product.rating} ({product.reviews} avaliações)
</span>
```

### **4. Header Component**

```jsx
// ❌ Antes
<div className='logo'>
  Skin Savvy
</div>

// ✅ Depois
<div className='logo headline-4'>
  Skin Savvy
</div>

// ❌ Antes
<span>Navegacao</span>

// ✅ Depois
<span className="body-medium">Navegacao</span>

// ❌ Antes
<li><a href='#products'>Produtos</a></li>

// ✅ Depois
<li><a href='#products' className="body-medium">Produtos</a></li>
```

## 🎨 Classes de Hierarquia Disponíveis

### **Headlines (Futura PT)**
```css
.headline-1    /* 48px - Título principal */
.headline-2    /* 36px - Títulos de seção */
.headline-3    /* 30px - Subtítulos importantes */
.headline-4    /* 24px - Títulos de cards */
.headline-5    /* 20px - Títulos menores */
```

### **Corpo de Texto (Source Sans Pro)**
```css
.body-large    /* 18px - Textos longos */
.body-medium   /* 16px - Texto padrão */
.body-small    /* 14px - Textos secundários */
.caption       /* 12px - Legendas */
```

### **Elementos Específicos**
```css
.badge-text    /* 14px - Badges */
.button-text   /* 18px - Botões */
.price-text    /* 24px - Preços */
.rating-text   /* 14px - Avaliações */
```

## 🎯 Utilitários de Cores

```css
.text-primary    /* #1A1A1A - Texto principal */
.text-secondary  /* #666666 - Texto secundário */
.text-light      /* #FFFFFF - Texto claro */
.text-muted      /* #999999 - Texto suave */
.text-tertiary   /* #CCCCCC - Texto terciário */
```

## 🔧 Como Implementar

### **1. Identifique o Elemento**
- Títulos principais → `.headline-1`
- Títulos de seção → `.headline-2`
- Títulos de cards → `.headline-4`
- Corpo de texto → `.body-medium`
- Descrições → `.body-large`

### **2. Aplique a Classe**
```jsx
// Substitua classes específicas por classes de hierarquia
<h1 className="headline-1">Título Principal</h1>
<p className="body-large">Descrição do produto</p>
<span className="badge-text">Novo</span>
```

### **3. Combine com Utilitários**
```jsx
// Título com cor primária
<h2 className="headline-2 text-primary">Título</h2>

// Texto centralizado
<p className="body-medium text-center">Texto centralizado</p>

// Badge com peso extra
<span className="badge-text font-bold">Destaque</span>
```

## 📱 Responsividade Automática

As classes se ajustam automaticamente:

### **Desktop (>768px)**
- `.headline-1` = 48px
- `.headline-2` = 36px
- `.body-large` = 18px

### **Mobile (≤768px)**
- `.headline-1` = 30px
- `.headline-2` = 24px
- `.body-large` = 16px

## 🎯 Benefícios da Implementação

1. **Consistência**: Todas as seções seguem o mesmo padrão
2. **Manutenibilidade**: Mudanças centralizadas
3. **Performance**: Classes otimizadas
4. **Acessibilidade**: Contraste e tamanhos adequados
5. **Escalabilidade**: Fácil adição de novos elementos

## 🚀 Próximos Passos

1. **Aplique gradualmente**: Comece pelos títulos principais
2. **Teste responsividade**: Verifique em diferentes dispositivos
3. **Mantenha consistência**: Use sempre as mesmas classes para elementos similares
4. **Documente mudanças**: Registre as alterações feitas

Este sistema garante uma **experiência visual coesa e profissional** em todo o projeto! 