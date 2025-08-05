// 🎯 Centralizar dados de imagens
// Este arquivo contém URLs de imagens otimizadas para os produtos

export interface ProductImage {
  id: number;
  name: string;
  // 🎯 URLs responsivas baseadas na estrutura local
  images: {
    small: string;   // 300px - mobile
    medium: string;  // 600px - tablet
    large: string;   // 900px - desktop
    original: string; // Original para fallback
  };
  alt: string;
}

// 🎯 Imagens locais que realmente existem na pasta
// Estrutura: public/images/products/aplicação-mockup_X.png
export const productImages: ProductImage[] = [
  {
    id: 1,
    name: "Chill Mask",
    images: {
      // 🎯 Imagens que realmente existem
      small: "/images/products/aplicação-mockup_2.png",
      medium: "/images/products/aplicação-mockup_2.png",
      large: "/images/products/aplicação-mockup_2.png",
      original: "/images/products/aplicação-mockup_2.png"
    },
    alt: "Máscara facial noturna"
  },
  {
    id: 2,
    name: "Sun Breeze",
    images: {
      small: "/images/products/aplicação-mockup_3.png",
      medium: "/images/products/aplicação-mockup_3.png",
      large: "/images/products/aplicação-mockup_3.png",
      original: "/images/products/aplicação-mockup_3.png"
    },
    alt: "Loção corporal"
  },
  {
    id: 3,
    name: "Polish Me",
    images: {
      small: "/images/products/aplicação-mockup_4.png",
      medium: "/images/products/aplicação-mockup_4.png",
      large: "/images/products/aplicação-mockup_4.png",
      original: "/images/products/aplicação-mockup_4.png"
    },
    alt: "Esfoliante Facial"
  },
  {
    id: 4,
    name: "Clear Skin Jam",
    images: {
      small: "/images/products/aplicação-mockup_4.png",
      medium: "/images/products/aplicação-mockup_4.png",
      large: "/images/products/aplicação-mockup_4.png",
      original: "/images/products/aplicação-mockup_4.png"
    },
    alt: "Gel esfoliante facial"
  },
  {
    id: 5,
    name: "Soft Touch",
    images: {
      small: "/images/products/aplicação-mockup_5.png",
      medium: "/images/products/aplicação-mockup_5.png",
      large: "/images/products/aplicação-mockup_5.png",
      original: "/images/products/aplicação-mockup_5.png"
    },
    alt: "Creme para as Mãos"
  },
  {
    id: 6,
    name: "Skin Boost",
    images: {
      small: "/images/products/aplicação-mockup_6.png",
      medium: "/images/products/aplicação-mockup_6.png",
      large: "/images/products/aplicação-mockup_6.png",
      original: "/images/products/aplicação-mockup_6.png"
    },
    alt: "Sérum multifuncional"
  },
  {
    id: 7,
    name: "Clean Bloom",
    images: {
      small: "/images/products/aplicação-mockup_7.png",
      medium: "/images/products/aplicação-mockup_7.png",
      large: "/images/products/aplicação-mockup_7.png",
      original: "/images/products/aplicação-mockup_7.png"
    },
    alt: "Sabonete facial"
  }
];

// 🎯 Função utilitária para gerar srcset
export const generateSrcSet = (images: ProductImage['images']): string => {
  // 🎯Para imagens locais, usamos a mesma imagem
  // Em produção, você pode criar versões otimizadas
  return `${images.small} 300w, ${images.medium} 600w, ${images.large} 900w`;
};

// 🎯 Função para obter imagem por ID
export const getProductImage = (id: number): ProductImage | undefined => {
  return productImages.find(img => img.id === id);
};

// 🎯  Placeholder 
export const placeholderImage = {
  // 🎯 Placeholders inteligentes
  small: "https://via.placeholder.com/300x300/f3c8f3/e22897?text=Produto",
  medium: "https://via.placeholder.com/600x600/f3c8f3/e22897?text=Produto",
  large: "https://via.placeholder.com/900x900/f3c8f3/e22897?text=Produto",
  original: "https://via.placeholder.com/1200x1200/f3c8f3/e22897?text=Produto"
};

// 🎯  Função para adicionar novo produto
export const addProductImage = (product: ProductImage) => {
  productImages.push(product);
};

// 🎯  Função para validar se imagem existe
export const validateImagePath = (): boolean => {
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
   - Nome: aplicação-mockup_X.png (onde X é o próximo número)
   - Dimensões: 400x400px (conforme README)
   - Formato: PNG (conforme existente)
   - Qualidade: 80-85%

2. 📝 ADICIONAR NO ARRAY:
   - Adicione um novo objeto no array productImages
   - Use o próximo ID disponível
   - Siga o padrão de nomenclatura aplicação-mockup_X.png

3. 🔗 CONECTAR NO COMPONENTE:
   - Atualize o array products em Products.tsx
   - Use o mesmo ID do productImages

EXEMPLO:
{
  id: 8, // Próximo ID disponível
  name: "Novo Produto",
  images: {
    small: "/images/products/aplicação-mockup_8.png",
    medium: "/images/products/aplicação-mockup_8.png",
    large: "/images/products/aplicação-mockup_8.png",
    original: "/images/products/aplicação-mockup_8.png"
  },
  alt: "Descrição acessível do produto"
}

4. ✅ TESTAR:
   - Verifique se a imagem carrega
   - Teste em diferentes dispositivos
   - Confirme se o fallback funciona
*/ 