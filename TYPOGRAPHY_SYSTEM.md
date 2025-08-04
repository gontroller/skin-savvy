# 🎨 Sistema de Tipografia - Skin Savvy

## 📋 Visão Geral

O projeto Skin Savvy utiliza um **sistema de tipografia profissional** baseado em técnicas de design gráfico, seguindo princípios de hierarquia visual, legibilidade e consistência. As fontes são carregadas através do **Adobe Typekit** para garantir qualidade e performance.

## 🎯 Fontes Typekit Implementadas

### **Configuração no HTML**
```html
<link rel="stylesheet" href="https://use.typekit.net/gpc8gwm.css">
```

### **Famílias de Fonte Utilizadas**
- **Futura PT**: Fonte primária para títulos e headlines
- **Source Sans Pro**: Fonte secundária para corpo de texto

## 🎯 Princípios de Design Gráfico Aplicados

### 1. **Hierarquia Tipográfica**
- **Fonte Primária (Futura PT)**: Para títulos, headlines e elementos de impacto
- **Fonte Secundária (Source Sans Pro)**: Para corpo de texto, descrições e elementos informativos

### 2. **Escala Tipográfica (1.25)**
```
xs:  12px  (0.75rem)
sm:  14px  (0.875rem)
base: 16px (1rem)
lg:  18px  (1.125rem)
xl:  20px  (1.25rem)
2xl: 24px  (1.5rem)
3xl: 30px  (1.875rem)
4xl: 36px  (2.25rem)
5xl: 48px  (3rem)
```

### 3. **Pesos de Fonte**
- Light (300): Para elementos sutis
- Normal (400): Para corpo de texto
- Medium (500): Para elementos de destaque
- Semibold (600): Para botões e CTAs
- Bold (700): Para títulos principais

## 🎨 Classes de Hierarquia Tipográfica

### **Headlines (Fonte Primária - Futura PT)**
```css
.headline-1    /* 48px - Título principal da página */
.headline-2    /* 36px - Títulos de seção */
.headline-3    /* 30px - Subtítulos importantes */
.headline-4    /* 24px - Títulos de cards */
.headline-5    /* 20px - Títulos menores */
```

### **Corpo de Texto (Fonte Secundária - Source Sans Pro)**
```css
.body-large    /* 18px - Textos longos e descrições */
.body-medium   /* 16px - Texto padrão */
.body-small    /* 14px - Textos secundários */
.caption       /* 12px - Legendas e notas */
```

### **Elementos Específicos**
```css
.badge-text    /* 14px - Badges e labels */
.button-text   /* 18px - Texto de botões */
.price-text    /* 24px - Preços */
.rating-text   /* 14px - Avaliações */
```

## 📱 Responsividade

O sistema se adapta automaticamente para diferentes tamanhos de tela:

### **Desktop (>768px)**
- Headlines mantêm tamanhos originais
- Corpo de texto otimizado para leitura

### **Mobile (≤768px)**
- Headlines reduzidas proporcionalmente
- Corpo de texto ajustado para telas menores
- Espaçamentos otimizados

## 🎯 Aplicação por Seção

### **Header**
- Logo: Fonte primária (Futura PT)
- Navegação: Fonte secundária (Source Sans Pro)
- Botões: Fonte secundária

### **Hero**
- Título principal: `headline-1` (48px)
- Subtítulo: `body-large` (18px)
- Badges: `badge-text` (14px)
- Botões: `button-text` (18px)

### **Benefits**
- Título da seção: `headline-2` (36px)
- Subtítulo: `body-large` (18px)
- Títulos dos cards: `headline-4` (24px)
- Descrições: `body-medium` (16px)
- Estatísticas: `headline-4` (24px) + `body-small` (14px)

### **Products**
- Título da seção: `headline-2` (36px)
- Subtítulo: `body-large` (18px)
- Nomes dos produtos: `headline-5` (20px)
- Descrições: `body-medium` (16px)
- Preços: `price-text` (24px)
- Avaliações: `rating-text` (14px)

## 🎨 Utilitários CSS

### **Famílias de Fonte**
```css
.font-primary    /* Futura PT */
.font-secondary  /* Source Sans Pro */
```

### **Pesos**
```css
.font-light      /* 300 */
.font-normal     /* 400 */
.font-medium     /* 500 */
.font-semibold   /* 600 */
.font-bold       /* 700 */
```

### **Tamanhos**
```css
.text-xs         /* 12px */
.text-sm         /* 14px */
.text-base       /* 16px */
.text-lg         /* 18px */
.text-xl         /* 20px */
.text-2xl        /* 24px */
.text-3xl        /* 30px */
.text-4xl        /* 36px */
.text-5xl        /* 48px */
```

### **Altura de Linha**
```css
.leading-tight   /* 1.25 */
.leading-normal  /* 1.5 */
.leading-relaxed /* 1.75 */
```

### **Espaçamento Entre Letras**
```css
.tracking-tight  /* -0.02em */
.tracking-normal /* 0 */
.tracking-wide   /* 0.05em */
```

## 🎯 Melhores Práticas

### **1. Hierarquia Visual**
- Use sempre a fonte primária para títulos
- Use a fonte secundária para corpo de texto
- Mantenha consistência nos tamanhos

### **2. Legibilidade**
- Altura de linha adequada (1.5 para corpo de texto)
- Espaçamento entre letras otimizado
- Contraste adequado com o fundo

### **3. Responsividade**
- Tamanhos se ajustam automaticamente
- Mantenha a hierarquia em todos os dispositivos
- Teste em diferentes tamanhos de tela

### **4. Acessibilidade**
- Contraste mínimo de 4.5:1
- Tamanhos mínimos de 12px
- Suporte a zoom do navegador

## 🔧 Como Usar

### **Exemplo de Implementação**
```jsx
// Título principal
<h1 className="headline-1">Transforme sua pele</h1>

// Subtítulo
<p className="body-large">Descrição do produto</p>

// Badge
<span className="badge-text">Novo</span>

// Preço
<div className="price-text">R$ 89,90</div>

// Botão
<button className="button-text">Comprar Agora</button>
```

### **Combinação de Classes**
```jsx
// Título com destaque
<h2 className="headline-2 text-primary">Título</h2>

// Texto centralizado
<p className="body-medium text-center">Texto centralizado</p>

// Badge com peso extra
<span className="badge-text font-bold">Destaque</span>
```

## 📊 Benefícios do Sistema

1. **Consistência**: Todas as seções seguem o mesmo padrão
2. **Manutenibilidade**: Mudanças centralizadas no CSS
3. **Escalabilidade**: Fácil adição de novos elementos
4. **Performance**: Classes otimizadas e reutilizáveis
5. **Acessibilidade**: Contraste e tamanhos adequados
6. **Qualidade**: Fontes Typekit garantem renderização perfeita

## 🎨 Cores de Texto

```css
.text-primary    /* #1A1A1A - Texto principal */
.text-secondary  /* #666666 - Texto secundário */
.text-light      /* #FFFFFF - Texto claro */
.text-muted      /* #999999 - Texto suave */
.text-tertiary   /* #CCCCCC - Texto terciário */
```

## 🚀 Vantagens do Typekit

### **1. Performance**
- Fontes otimizadas para web
- Carregamento rápido
- Cache inteligente

### **2. Qualidade**
- Fontes profissionais
- Renderização consistente
- Suporte a múltiplos pesos

### **3. Confiabilidade**
- Serviço gerenciado pela Adobe
- Alta disponibilidade
- Suporte técnico

### **4. Flexibilidade**
- Fácil atualização de fontes
- Controle de licenças
- Analytics de uso

Este sistema garante uma **experiência visual consistente e profissional** em todo o projeto, seguindo as melhores práticas de design gráfico e tipografia web, com a qualidade garantida pelo Adobe Typekit. 