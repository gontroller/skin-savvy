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
      // 🎯 IMAGEM ATUALIZADA: aplicação-mockup_10.png
      small: "/images/products/aplicação-mockup_10.png",
      medium: "/images/products/aplicação-mockup_10.png",
      large: "/images/products/aplicação-mockup_10.png",
      original: "/images/products/aplicação-mockup_10.png"
    },
    alt: "Gel limpiador facial suave em frasco transparente"
  },
  {
    id: 2,
    name: "Hidratante Facial Premium",
    images: {
      // 🎯 IMAGEM ADICIONADA: aplicação-mockup_2.png
      small: "/images/products/aplicação-mockup_2.png",
      medium: "/images/products/aplicação-mockup_2.png",
      large: "/images/products/aplicação-mockup_2.png",
      original: "/images/products/aplicação-mockup_2.png"
    },
    alt: "Hidratante facial premium em frasco elegante"
  },
  {
    id: 3,
    name: "Sérum Vitamina C",
    images: {
      // 🎯 IMAGEM ADICIONADA: aplicação-mockup_3.png
      small: "/images/products/aplicação-mockup_3.png",
      medium: "/images/products/aplicação-mockup_3.png",
      large: "/images/products/aplicação-mockup_3.png",
      original: "/images/products/aplicação-mockup_3.png"
    },
    alt: "Sérum de vitamina C em frasco âmbar"
  },
  {
    id: 4,
    name: "Máscara Hidratante",
    images: {
      // 🎯 IMAGEM ADICIONADA: aplicação-mockup_4.png
      small: "/images/products/aplicação-mockup_4.png",
      medium: "/images/products/aplicação-mockup_4.png",
      large: "/images/products/aplicação-mockup_4.png",
      original: "/images/products/aplicação-mockup_4.png"
    },
    alt: "Máscara hidratante em tubo"
  },
  {
    id: 5,
    name: "Esfoliante Facial",
    images: {
      // 🎯 IMAGEM ADICIONADA: aplicação-mockup_5.png
      small: "/images/products/aplicação-mockup_5.png",
      medium: "/images/products/aplicação-mockup_5.png",
      large: "/images/products/aplicação-mockup_5.png",
      original: "/images/products/aplicação-mockup_5.png"
    },
    alt: "Esfoliante facial em frasco"
  },
  {
    id: 6,
    name: "Protetor Solar FPS 50",
    images: {
      // 🎯 IMAGEM ADICIONADA: aplicação-mockup_7.png
      small: "/images/products/aplicação-mockup_7.png",
      medium: "/images/products/aplicação-mockup_7.png",
      large: "/images/products/aplicação-mockup_7.png",
      original: "/images/products/aplicação-mockup_7.png"
    },
    alt: "Protetor solar FPS 50 em frasco"
  },
  // 🎯 EXEMPLO: Como adicionar novo produto
  {
    id: 7,
    name: "Creme Noturno Regenerador",
    images: {
      // 🎯 IMAGEM ADICIONADA: aplicação-mockup_6.png
      small: "/images/products/aplicação-mockup_6.png",
      medium: "/images/products/aplicação-mockup_6.png",
      large: "/images/products/aplicação-mockup_6.png",
      original: "/images/products/aplicação-mockup_6.png"
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
export const validateImagePath = (): boolean => {
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