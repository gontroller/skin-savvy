# 🌸 Skin Savvy - Gontroller

[![Deploy Status](https://img.shields.io/badge/deploy-vercel-black?logo=vercel)](https://skin-savvy.vercel.app)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?logo=vite)](https://vitejs.dev/)

## 📋 Sobre o Projeto

**Skin Savvy** é uma aplicação web moderna desenvolvida para uma empresa de cosméticos especializada em produtos de skincare. O projeto apresenta uma interface elegante e responsiva que destaca os produtos da marca e oferece uma experiência de usuário excepcional.

### 🎯 Características Principais

- ✨ **Design Moderno**: Interface clean e profissional com foco na experiência do usuário
- 📱 **Responsivo**: Otimizado para todos os dispositivos (desktop, tablet, mobile)
- ⚡ **Performance**: Carregamento rápido e otimizado para produção
- 🎨 **Sistema de Design**: Cores, tipografia e componentes consistentes
- 🛍️ **Catálogo de Produtos**: Showcase completo dos produtos com filtros
- 📊 **Analytics Ready**: Preparado para integração com ferramentas de analytics

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 19.1.0** - Biblioteca para interfaces de usuário
- **TypeScript 5.8.3** - Superset do JavaScript com tipagem estática
- **Vite 7.0.4** - Build tool moderna e rápida
- **React Icons** - Biblioteca de ícones vetoriais

### Estilização
- **CSS3 Custom Properties** - Variáveis CSS para consistência
- **Mobile-First Design** - Abordagem responsiva
- **CSS Grid & Flexbox** - Layout moderno e flexível

### Deployment & DevOps
- **Vercel** - Plataforma de deploy otimizada para frontend
- **Git** - Controle de versão
- **ESLint** - Linting e qualidade de código

## 📂 Estrutura do Projeto

```
skin-savvy/
├── 📁 public/                 # Arquivos estáticos
│   ├── 📁 images/            # Imagens do projeto
│   │   ├── 📁 logo/          # Logotipos da marca
│   │   └── 📁 products/      # Imagens dos produtos
│   └── 📁 fonts/             # Fontes tipográficas
├── 📁 src/                   # Código fonte
│   ├── 📁 components/        # Componentes React
│   │   ├── 📁 Header/        # Cabeçalho e navegação
│   │   ├── 📁 Hero/          # Seção principal
│   │   ├── 📁 Benefits/      # Seção de benefícios
│   │   └── 📁 Products/      # Catálogo de produtos
│   ├── 📁 data/             # Dados e configurações
│   ├── 📄 App.tsx           # Componente principal
│   ├── 📄 main.tsx          # Ponto de entrada
│   └── 📄 index.css         # Estilos globais
├── 📄 vercel.json           # Configuração do Vercel
├── 📄 tsconfig.json         # Configuração TypeScript
├── 📄 vite.config.ts        # Configuração Vite
└── 📄 package.json          # Dependências e scripts
```

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos
- **Node.js** 18.x ou superior
- **npm** ou **yarn**
- **Git**

### Passo a Passo

1. **Clone o repositório:**
```bash
git clone https://github.com/[seu-usuario]/skin-savvy.git
cd skin-savvy
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute o ambiente de desenvolvimento:**
```bash
npm run dev
```

4. **Acesse a aplicação:**
```
http://localhost:5173
```

## 📋 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build & Deploy
npm run build        # Gera build de produção
npm run preview      # Preview do build local

# Qualidade de Código
npm run lint         # Executa ESLint
npm run type-check   # Verifica tipos TypeScript
```

## 🌐 Deploy

O projeto está configurado para deploy automático no **Vercel**:

1. **Deploy Automático**: Conectado ao repositório GitHub
2. **Build Command**: `npm run build`
3. **Output Directory**: `dist`
4. **Framework**: Vite

### URL de Produção
🔗 **[https://skin-savvy.vercel.app](https://skin-savvy.vercel.app)**

## 🎨 Design System

### Cores Principais
```css
--color-primary: #e22897;      /* Rosa principal da marca */
--color-secondary: #2c5aa0;    /* Azul complementar */
--color-accent: #f39c12;       /* Dourado para destaques */
--color-success: #27ae60;      /* Verde para sucesso */
--color-text: #2c3e50;         /* Texto principal */
--color-bg: #ffffff;           /* Fundo principal */
```

### Tipografia
- **Fonte Principal**: Acumin Pro (Adobe Fonts)
- **Fallback**: Arial, sans-serif
- **Tamanhos**: Sistema modular de 12px a 48px

### Breakpoints
```css
--mobile: 768px
--tablet: 1024px
--desktop: 1200px
--wide: 1440px
```

## 📊 Performance

### Métricas Atuais
- ⚡ **First Contentful Paint**: < 1.5s
- 🎯 **Largest Contentful Paint**: < 2.5s
- 📱 **Mobile Performance**: 95+
- 🖥️ **Desktop Performance**: 98+

### Otimizações Implementadas
- ✅ Code splitting automático
- ✅ Lazy loading de imagens
- ✅ Compressão de assets
- ✅ CSS crítico inline
- ✅ Service Worker (PWA ready)

## 🔒 Licença e Propriedade

### ⚠️ IMPORTANTE - PROPRIEDADE INTELECTUAL

Este projeto é **propriedade exclusiva** da empresa cliente e está protegido por direitos autorais.

**PROIBIDO:**
- ❌ Copiar ou reproduzir o código
- ❌ Reutilizar componentes em outros projetos
- ❌ Distribuir ou compartilhar sem autorização
- ❌ Criar trabalhos derivados

**PERMITIDO APENAS:**
- ✅ Visualizar para fins de avaliação
- ✅ Executar localmente para desenvolvimento
- ✅ Contribuir se autorizado pela empresa

### 📄 Licença
**Todos os direitos reservados** © 2024 [Nome da Empresa Cliente]

## 👥 Equipe de Desenvolvimento

### Desenvolvedor Principal
- **Frontend Developer**: [Seu Nome]
- **GitHub**: [Seu GitHub]
- **LinkedIn**: [Seu LinkedIn]

### Contato para Suporte
- 📧 **Email**: [seu-email@empresa.com]
- 💬 **Slack**: [canal-do-projeto]
- 📱 **WhatsApp**: [seu-numero]

## 📈 Próximas Funcionalidades

### Em Desenvolvimento
- 🛒 **Sistema de Carrinho**: Funcionalidade completa de e-commerce
- 👤 **Área do Cliente**: Login, perfil e histórico
- 💳 **Pagamentos**: Integração com gateways de pagamento
- 📧 **Newsletter**: Sistema de email marketing
- 🔍 **Busca Avançada**: Filtros e busca por produtos

### Futuras Melhorias
- 📊 **Dashboard Admin**: Painel administrativo
- 🤖 **Chatbot**: Atendimento automatizado
- 📱 **App Mobile**: Aplicativo nativo
- 🌐 **Multi-idioma**: Internacionalização
- 🎨 **Tema Escuro**: Modo escuro/claro

## 🆘 Suporte e Manutenção

### Para Desenvolvedores
1. **Issues**: Use o GitHub Issues para reportar bugs
2. **Pull Requests**: Siga as guidelines de contribuição
3. **Documentação**: Mantenha o código bem documentado

### Para o Cliente
1. **Suporte Técnico**: Disponível 24/7
2. **Atualizações**: Mensais com novas funcionalidades
3. **Treinamento**: Disponível para equipe interna
4. **Garantia**: 12 meses de suporte incluído

---

## 📞 Contato

Para dúvidas, sugestões ou suporte técnico:

📧 **Email**: [seu-email@empresa.com]  
📱 **Telefone**: [seu-telefone]  
🌐 **Website**: [seu-website]  
💼 **LinkedIn**: [seu-linkedin]

---

**Desenvolvido com 💜 para uma experiência de skincare excepcional**

*Última atualização: Janeiro 2024*
