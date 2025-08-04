// 🎯 MELHOR PRÁTICA: Centralizar dados de imagens
// Este arquivo contém URLs de imagens otimizadas para os produtos

export interface ProductImage {
  id: number;
  name: string;
  // 🎯 MELHOR PRÁTICA: URLs responsivas baseadas na estrutura local
  images: {
    small: string;   // 300px - mobile
    medium: string;  // 600px - tablet
    large: string;   // 900px - desktop
    original: string; // Original para fallback
  };
  alt: string;
}

// 🎯 MELHOR PRÁTICA: Imagens locais conforme README
// Estrutura: public/images/products/nome-produto.jpg
export const productImages: ProductImage[] = [
  {
    id: 1,
    name: "Gel Limpiador Suave",
    images: {
      // 🎯 SEGUINDO SEU README: Imagens locais em public/images/products/
      small: "/images/products/cleanser-gel.jpg",
      medium: "/images/products/cleanser-gel.jpg",
      large: "/images/products/cleanser-gel.jpg",
      original: "/images/products/cleanser-gel.jpg"
    },
    alt: "Gel limpiador facial suave em frasco transparente"
  },
  {
    id: 2,
    name: "Hidratante Facial Premium",
    images: {
      small: "/images/products/moisturizer-premium.jpg",
      medium: "/images/products/moisturizer-premium.jpg",
      large: "/images/products/moisturizer-premium.jpg",
      original: "/images/products/moisturizer-premium.jpg"
    },
    alt: "Hidratante facial premium em frasco elegante"
  },
  {
    id: 3,
    name: "Sérum Vitamina C",
    images: {
      small: "/images/products/vitamin-c-serum.jpg",
      medium: "/images/products/vitamin-c-serum.jpg",
      large: "/images/products/vitamin-c-serum.jpg",
      original: "/images/products/vitamin-c-serum.jpg"
    },
    alt: "Sérum de vitamina C em frasco âmbar"
  },
  {
    id: 4,
    name: "Máscara Hidratante",
    images: {
      small: "/images/products/hydrating-mask.jpg",
      medium: "/images/products/hydrating-mask.jpg",
      large: "/images/products/hydrating-mask.jpg",
      original: "/images/products/hydrating-mask.jpg"
    },
    alt: "Máscara hidratante em tubo"
  },
  {
    id: 5,
    name: "Esfoliante Facial",
    images: {
      small: "/images/products/facial-scrub.jpg",
      medium: "/images/products/facial-scrub.jpg",
      large: "/images/products/facial-scrub.jpg",
      original: "/images/products/facial-scrub.jpg"
    },
    alt: "Esfoliante facial em frasco"
  },
  {
    id: 6,
    name: "Protetor Solar FPS 50",
    images: {
      small: "/images/products/sunscreen-spf50.jpg",
      medium: "/images/products/sunscreen-spf50.jpg",
      large: "/images/products/sunscreen-spf50.jpg",
      original: "/images/products/sunscreen-spf50.jpg"
    },
    alt: "Protetor solar FPS 50 em frasco"
  },
  // 🎯 EXEMPLO: Como adicionar novo produto
  {
    id: 7,
    name: "Creme Noturno Regenerador",
    images: {
      small: "/images/products/creme-noturno.jpg",
      medium: "/images/products/creme-noturno.jpg",
      large: "/images/products/creme-noturno.jpg",
      original: "/images/products/creme-noturno.jpg"
    },
    alt: "Creme noturno regenerador em frasco elegante"
  }
];

// 🎯 MELHOR PRÁTICA: Função utilitária para gerar srcset
export const generateSrcSet = (images: ProductImage['images']): string => {
  // 🎯 SEGUINDO SEU README: Para imagens locais, usamos a mesma imagem
  // Em produção, você pode criar versões otimizadas
  return `${images.small} 300w, ${images.medium} 600w, ${images.large} 900w`;
};

// 🎯 MELHOR PRÁTICA: Função para obter imagem por ID
export const getProductImage = (id: number): ProductImage | undefined => {
  return productImages.find(img => img.id === id);
};

// 🎯 MELHOR PRÁTICA: Placeholder seguindo seu README
export const placeholderImage = {
  // 🎯 SEGUINDO SEU README: Placeholders inteligentes
  small: "https://via.placeholder.com/300x300/f3c8f3/e22897?text=Produto",
  medium: "https://via.placeholder.com/600x600/f3c8f3/e22897?text=Produto",
  large: "https://via.placeholder.com/900x900/f3c8f3/e22897?text=Produto",
  original: "https://via.placeholder.com/1200x1200/f3c8f3/e22897?text=Produto"
};

// 🎯 MELHOR PRÁTICA: Função para adicionar novo produto
export const addProductImage = (product: ProductImage) => {
  productImages.push(product);
};

// 🎯 MELHOR PRÁTICA: Função para validar se imagem existe
export const validateImagePath = (path: string): boolean => {
  // Em desenvolvimento, sempre retorna true
  // Em produção, você pode implementar verificação real
  return true;
};

// ==========================================
// 📚 GUIA: Como Adicionar Novas Imagens
// ==========================================

/*
🎯 PASSO A PASSO SEGUINDO SEU README:

1. 📁 SALVAR IMAGEM:
   - Salve a imagem em: public/images/products/
   - Nome: kebab-case (ex: novo-produto.jpg)
   - Dimensões: 400x400px (conforme README)
   - Formato: JPG ou PNG
   - Qualidade: 80-85%

2. 📝 ADICIONAR NO ARRAY:
   - Adicione um novo objeto no array productImages
   - Use o próximo ID disponível
   - Siga o padrão de nomenclatura

3. 🔗 CONECTAR NO COMPONENTE:
   - Atualize o array products em Products.tsx
   - Use o mesmo ID do productImages

EXEMPLO:
{
  id: 7, // Próximo ID disponível
  name: "Novo Produto",
  images: {
    small: "/images/products/novo-produto.jpg",
    medium: "/images/products/novo-produto.jpg",
    large: "/images/products/novo-produto.jpg",
    original: "/images/products/novo-produto.jpg"
  },
  alt: "Descrição acessível do produto"
}

4. ✅ TESTAR:
   - Verifique se a imagem carrega
   - Teste em diferentes dispositivos
   - Confirme se o fallback funciona
*/ 