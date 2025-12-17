<div align="center">

# 🌱 Bizu Vegano

### Seu guia vegano completo em Fortaleza

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://bizu-vegano.web.app/)
[![Firebase](https://img.shields.io/badge/Firebase-Hosting-orange.svg)](https://firebase.google.com/)
[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-purple.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

**[🇺🇸 English Version](README.en.md)** | 🇧🇷 Versão em Português

---

</div>

### 📖 Sobre o Projeto

**Bizu Vegano** é uma plataforma web completa para a comunidade vegana de Fortaleza. O projeto oferece um guia abrangente de estabelecimentos veganos e vegetarianos, incluindo restaurantes, lanchonetes, cafés, queijarias, sorveterias e muito mais. Além disso, fornece dicas práticas, receitas e informações sobre cosméticos veganos.

### ✨ Funcionalidades

- 🗺️ **Catálogo Completo**: Navegue por diversas categorias de estabelecimentos veganos
- 📍 **Informações Detalhadas**: Endereço, telefone, horário de funcionamento e links para redes sociais
- 🍳 **Receitas Veganas**: Coleção de receitas práticas e deliciosas
- 💡 **Dicas Práticas**: Orientações para facilitar a vida vegana no dia a dia
- 💄 **Cosméticos Veganos**: Lista de marcas e produtos livres de crueldade animal
- 📱 **Design Responsivo**: Interface otimizada para dispositivos móveis, tablets e desktops
- 🎨 **Interface Moderna**: Design intuitivo e agradável desenvolvido com Tailwind CSS
- 🎉 **Seção de Festas**: Informações sobre buffets e serviços veganos para eventos

### 🛠️ Tecnologias Utilizadas

#### Frontend

- **React 18.3** - Biblioteca JavaScript para construção de interfaces
- **React Router DOM 6.25** - Roteamento e navegação entre páginas
- **Tailwind CSS 3.4** - Framework CSS utilitário para estilização
- **Vite 6.0** - Build tool moderna e rápida
- **React Hook Form 7.52** - Gerenciamento de formulários

#### Backend & Services

- **Firebase 11.0**
  - Firestore - Banco de dados NoSQL em tempo real
  - Authentication - Sistema de autenticação de usuários
  - Hosting - Hospedagem do site
  - Storage - Armazenamento de arquivos
  - Functions - Funções serverless
- **React GA4** - Google Analytics 4 para monitoramento

#### UI/UX

- **React Burger Menu** - Menu hambúrguer responsivo
- **PostCSS & Autoprefixer** - Processamento e otimização de CSS

### 🚀 Como Executar o Projeto

#### Pré-requisitos

```bash
Node.js >= 18.x
npm ou yarn
```

#### Instalação

```bash
# Clone o repositório
git clone https://github.com/flaviare1s/bizu-vegano.git

# Entre no diretório do projeto
cd bizu-vegano

# Instale as dependências
npm install
```

#### Configuração do Firebase

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
2. Configure o arquivo `src/firebase/config.js` com suas credenciais
3. Ative os serviços necessários (Firestore, Authentication, etc.)

#### Executar em Desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:5173` no seu navegador

#### Build para Produção

```bash
npm run build
```

#### Deploy no Firebase

```bash
npm install -g firebase-tools
firebase login
firebase deploy --only hosting
```

### 📁 Estrutura do Projeto

```
bizu-vegano/
├── src/
│   ├── assets/          # Imagens e recursos estáticos
│   ├── components/      # Componentes React reutilizáveis
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Loader.jsx
│   │   └── ...
│   ├── firebase/        # Configuração e serviços do Firebase
│   │   ├── config.js
│   │   └── firebaseService.js
│   ├── pages/           # Páginas da aplicação
│   │   ├── Home.jsx
│   │   ├── Restaurantes.jsx
│   │   ├── Dicas.jsx
│   │   └── ...
│   ├── styles/          # Arquivos de estilo
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Ponto de entrada
├── firebase.json        # Configuração do Firebase
├── tailwind.config.js   # Configuração do Tailwind CSS
├── vite.config.js       # Configuração do Vite
└── package.json         # Dependências do projeto
```

### 🎯 Desafios e Aprendizados

- **🔐 Integração com Firebase**: Implementação de regras de segurança robustas para proteger dados dos usuários
- **📱 Design Responsivo**: Desenvolvimento de layouts adaptáveis usando Tailwind CSS e mobile-first approach
- **⚡ Performance**: Otimização de carregamento e renderização com React hooks (`useState`, `useEffect`, `useMemo`)
- **🧭 Navegação**: Implementação de rotas dinâmicas e navegação fluida com React Router
- **♿ Acessibilidade**: Cuidado com semântica HTML e experiência inclusiva para todos os usuários
- **📊 Analytics**: Integração com Google Analytics 4 para monitoramento de métricas e comportamento do usuário

### 🤝 Contribuindo

Contribuições são sempre bem-vindas! Se você deseja contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

### 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

### 💚 Agradecimentos

Agradecimentos especiais à comunidade vegana de Fortaleza, que inspirou e tornou este projeto possível. Um grande obrigado a todos os estabelecimentos que apoiam o movimento vegano na cidade!

### 🌐 Links

- **Website**: [bizu-vegano.web.app](https://bizu-vegano.web.app/)
- **GitHub**: [github.com/flaviare1s/bizu-vegano](https://github.com/flaviare1s/bizu-vegano)

---

<div align="center">

Feito com 💚 por [Flávia Reis](https://github.com/flaviare1s)

**Go Vegan! 🌱**

</div>
