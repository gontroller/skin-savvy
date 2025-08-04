# 📸 Imagens dos Produtos

Esta pasta contém as imagens dos produtos da Skin Savvy.

## 📁 Estrutura Recomendada

```
public/images/products/
├── cleanser-gel.jpg          # Gel Limpiador
├── moisturizer-premium.jpg   # Hidratante Premium
├── vitamin-c-serum.jpg       # Sérum Vitamina C
├── hydrating-mask.jpg        # Máscara Hidratante
├── facial-scrub.jpg          # Esfoliante Facial
└── sunscreen-spf50.jpg       # Protetor Solar
```

## 🎯 Especificações das Imagens

### **Dimensões Recomendadas:**
- **Largura**: 400px
- **Altura**: 400px
- **Formato**: JPG ou PNG
- **Qualidade**: 80-85%

### **Orientação:**
- **Fundo**: Branco ou transparente
- **Produto**: Centralizado
- **Iluminação**: Suave e natural
- **Ângulo**: 45° ou frontal

## 🚀 Como Adicionar Novas Imagens

1. **Salve a imagem** nesta pasta com nome descritivo
2. **Atualize o componente** `Products.tsx` com o novo caminho
3. **Teste** se a imagem carrega corretamente

### **Exemplo:**
```jsx
{
  id: 7,
  name: "Novo Produto",
  image: "/images/products/novo-produto.jpg",
  // ... outras propriedades
}
```

## 🔧 Fallbacks Implementados

- **Lazy Loading**: Imagens carregam conforme necessário
- **Placeholder**: Mostra ícone enquanto carrega
- **Error Handling**: Se imagem falhar, mostra placeholder
- **Responsive**: Adapta-se a diferentes telas

## 📱 Otimizações

- **WebP**: Formato moderno para melhor performance
- **Compressão**: Imagens otimizadas para web
- **Alt Text**: Acessibilidade para leitores de tela
- **Loading**: Lazy loading para performance

## 🎨 Alternativas de Imagens

### **1. Imagens Locais (Recomendado)**
```jsx
image: "/images/products/produto.jpg"
```

### **2. Imagens Externas (CDN)**
```jsx
image: "https://cdn.exemplo.com/produto.jpg"
```

### **3. Placeholders Inteligentes**
```jsx
image: "https://via.placeholder.com/400x400/f3c8f3/e22897?text=Nome+Produto"
```

### **4. Unsplash (Para Testes)**
```jsx
image: "https://images.unsplash.com/photo-1234567890?w=400&h=400&fit=crop"
```

## ⚡ Performance

- **Tamanho**: Máximo 200KB por imagem
- **Formato**: JPG para fotos, PNG para transparência
- **Compressão**: Otimize antes de usar
- **Cache**: Configure cache adequado no servidor 