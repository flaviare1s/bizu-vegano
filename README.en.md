<div align="center">

# 🌱 Bizu Vegano

### Your complete vegan guide in Fortaleza, Brazil

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://bizu-vegano.web.app/)
[![Firebase](https://img.shields.io/badge/Firebase-Hosting-orange.svg)](https://firebase.google.com/)
[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-purple.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

🇺🇸 English Version | **[🇧🇷 Versão em Português](README.md)**

---

</div>

## 📖 About The Project

**Bizu Vegano** is a comprehensive web platform for the vegan community in Fortaleza, Brazil. The project offers a complete guide to vegan and vegetarian establishments, including restaurants, snack bars, cafés, cheese shops, ice cream parlors, and much more. It also provides practical tips, recipes, and information about vegan cosmetics.

## ✨ Features

- 🗺️ **Complete Catalog**: Browse through various categories of vegan establishments
- 📍 **Detailed Information**: Address, phone, opening hours, and social media links
- 🍳 **Vegan Recipes**: Collection of practical and delicious recipes
- 💡 **Practical Tips**: Guidelines to make vegan life easier on a daily basis
- 💄 **Vegan Cosmetics**: List of cruelty-free brands and products
- 📱 **Responsive Design**: Interface optimized for mobile devices, tablets, and desktops
- 🎨 **Modern Interface**: Intuitive and pleasant design developed with Tailwind CSS
- 🎉 **Events Section**: Information about vegan buffets and services for events

## 🛠️ Technologies Used

### Frontend

- **React 18.3** - JavaScript library for building user interfaces
- **React Router DOM 6.25** - Routing and navigation between pages
- **Tailwind CSS 3.4** - Utility-first CSS framework for styling
- **Vite 6.0** - Modern and fast build tool
- **React Hook Form 7.52** - Form management

### Backend & Services

- **Firebase 11.0**
  - Firestore - Real-time NoSQL database
  - Authentication - User authentication system
  - Hosting - Website hosting
  - Storage - File storage
  - Functions - Serverless functions
- **React GA4** - Google Analytics 4 for monitoring

### UI/UX

- **React Burger Menu** - Responsive hamburger menu
- **PostCSS & Autoprefixer** - CSS processing and optimization

## 🚀 How to Run The Project

### Prerequisites

```bash
Node.js >= 18.x
npm or yarn
```

### Installation

```bash
# Clone the repository
git clone https://github.com/flaviare1s/bizu-vegano.git

# Enter the project directory
cd bizu-vegano

# Install dependencies
npm install
```

### Firebase Configuration

1. Create a project in [Firebase Console](https://console.firebase.google.com/)
2. Configure the `src/firebase/config.js` file with your credentials
3. Enable the necessary services (Firestore, Authentication, etc.)

### Run in Development

```bash
npm run dev
```

Access `http://localhost:5173` in your browser

### Production Build

```bash
npm run build
```

### Deploy to Firebase

```bash
npm install -g firebase-tools
firebase login
firebase deploy --only hosting
```

## 📁 Project Structure

```
bizu-vegano/
├── src/
│   ├── assets/          # Images and static resources
│   ├── components/      # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Loader.jsx
│   │   └── ...
│   ├── firebase/        # Firebase configuration and services
│   │   ├── config.js
│   │   └── firebaseService.js
│   ├── pages/           # Application pages
│   │   ├── Home.jsx
│   │   ├── Restaurantes.jsx
│   │   ├── Dicas.jsx
│   │   └── ...
│   ├── styles/          # Style files
│   ├── App.jsx          # Main component
│   └── main.jsx         # Entry point
├── firebase.json        # Firebase configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies
```

## 🎯 Challenges and Learnings

- **🔐 Firebase Integration**: Implementation of robust security rules to protect user data
- **📱 Responsive Design**: Development of adaptive layouts using Tailwind CSS and mobile-first approach
- **⚡ Performance**: Loading and rendering optimization with React hooks (`useState`, `useEffect`, `useMemo`)
- **🧭 Navigation**: Implementation of dynamic routes and smooth navigation with React Router
- **♿ Accessibility**: Care with HTML semantics and inclusive experience for all users
- **📊 Analytics**: Integration with Google Analytics 4 for monitoring metrics and user behavior

## 🤝 Contributing

Contributions are always welcome! If you want to contribute:

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/NewFeature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

## 📝 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

## 💚 Acknowledgments

Special thanks to the vegan community of Fortaleza, which inspired and made this project possible. A big thank you to all establishments that support the vegan movement in the city!

## 🌐 Links

- **Website**: [bizu-vegano.web.app](https://bizu-vegano.web.app/)
- **GitHub**: [github.com/flaviare1s/bizu-vegano](https://github.com/flaviare1s/bizu-vegano)

---

<div align="center">

Made with 💚 by [Flávia Reis](https://github.com/flaviare1s)

**Go Vegan! 🌱**

</div>
