# Frontend - Mi Blog Personal

Frontend moderno desarrollado con React + Vite para el blog personal API.

## 🚀 Características

- **Interfaz moderna y responsiva** con diseño atractivo
- **Gestión completa de artículos** (crear, leer, actualizar, eliminar)
- **Subida de imágenes** para los artículos
- **Navegación fluida** con React Router
- **API integrada** con axios
- **Diseño mobile-first** completamente responsivo

## 🛠️ Tecnologías

- **React 18** - Biblioteca de interfaz de usuario
- **Vite** - Herramienta de construcción rápida
- **React Router Dom** - Navegación entre páginas
- **Axios** - Cliente HTTP para API calls
- **Lucide React** - Iconos modernos
- **CSS3** - Estilos con gradientes y animaciones

## 📦 Instalación y Uso

1. **Instalar dependencias:**
```bash
cd frontend
npm install
```

2. **Ejecutar en modo desarrollo:**
```bash
npm run dev
```

3. **Construir para producción:**
```bash
npm run build
```

## 🔗 Configuración de API

El frontend está configurado para conectarse con la API en `http://localhost:3900/api`. 

Asegúrate de que el backend esté ejecutándose antes de usar el frontend.

## 📱 Páginas

- **Inicio (/)** - Lista de todos los artículos
- **Ver Artículo (/article/:id)** - Vista detallada de un artículo
- **Crear Artículo (/create)** - Formulario para crear nuevo artículo
- **Editar Artículo (/edit/:id)** - Formulario para editar artículo existente

## 🎨 Características de Diseño

- Gradientes modernos y efectos de blur
- Animaciones suaves en hover y transiciones
- Cards con sombras y efectos 3D
- Tipografía moderna con Inter font
- Sistema de colores consistente
- Responsive design para todos los dispositivos

## 🔧 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.jsx      # Cabecera de navegación
│   ├── ArticleList.jsx # Lista de artículos
│   ├── ArticleDetail.jsx # Vista detallada
│   ├── CreateArticle.jsx # Crear artículo
│   └── EditArticle.jsx # Editar artículo
├── services/           # Servicios de API
│   └── articleService.js # Llamadas a la API
├── App.jsx            # Componente principal
├── App.css            # Estilos principales
└── main.jsx           # Punto de entrada
```+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
