# Mi Blog API - Full Stack

Un blog personal moderno con API REST desarrollado con Node.js y frontend en React.

## 🚀 Características

### Backend (API REST)
- **Node.js + Express** - Servidor web robusto
- **MongoDB + Mongoose** - Base de datos NoSQL
- **Multer** - Subida de imágenes
- **CORS** - Configuración para frontend
- **Validaciones** - Datos seguros y consistentes
- **Tests** - Suite completa con Jest

### Frontend (React)
- **React 18 + Vite** - Interfaz moderna y rápida
- **React Router** - Navegación fluida
- **Axios** - Cliente HTTP para API
- **Diseño responsive** - Mobile-first
- **UI moderna** - Gradientes y animaciones

## 📦 Instalación Rápida

```bash
# Clonar el repositorio
git clone <url-del-repo>
cd MiBlogAPI

# Instalar todas las dependencias (backend + frontend)
npm run setup

# Iniciar todo el stack de desarrollo
npm run fullstack
```

## 🛠️ Instalación Manual

### 1. Backend
```bash
# Instalar dependencias del backend
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### 2. Frontend
```bash
# Instalar dependencias del frontend
cd frontend
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🔗 URLs de Desarrollo

- **Backend API**: http://localhost:3900
- **Frontend**: http://localhost:5173

## 📡 API Endpoints

### Artículos
- `GET /api/listar` - Listar todos los artículos
- `GET /api/listar/:ultimos` - Listar últimos N artículos
- `GET /api/articulo/:id` - Obtener artículo por ID
- `POST /api/crear` - Crear nuevo artículo
- `PUT /api/actualizar/:id` - Actualizar artículo
- `DELETE /api/borrar/:id` - Eliminar artículo
- `POST /api/subir-imagen/:id` - Subir imagen a artículo

### Rutas de Prueba
- `GET /api/ruta-de-prueba` - Endpoint de prueba
- `GET /api/curso` - Información del curso

## 📱 Funcionalidades del Frontend

- **Lista de artículos** con cards modernas
- **Vista detallada** de cada artículo
- **Crear artículos** con formulario intuitivo
- **Editar artículos** existentes
- **Eliminar artículos** con confirmación
- **Subida de imágenes** con preview
- **Navegación responsive** para móviles

## 🗂️ Estructura del Proyecto

```
MiBlogAPI/
├── frontend/                 # Aplicación React
│   ├── src/
│   │   ├── components/      # Componentes React
│   │   ├── services/        # Servicios de API
│   │   └── ...
│   ├── package.json
│   └── README.md
├── basededatos/             # Configuración de BD
├── controladores/           # Lógica de negocio
├── modelos/                # Modelos de Mongoose
├── rutas/                  # Rutas de Express
├── helpers/                # Utilidades
├── tests/                  # Tests automatizados
├── Imagenes/              # Archivos subidos
├── index.js               # Servidor principal
├── package.json
└── README.md
```

## 🧪 Testing

```bash
# Ejecutar tests del backend
npm test

# Ejecutar tests en modo watch
npm run test:watch
```

## 🎨 Tecnologías Utilizadas

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- CORS
- Validator
- Jest
- Supertest

### Frontend
- React 18
- Vite
- React Router Dom
- Axios
- Lucide React (iconos)
- CSS3 (gradientes, animaciones)

## 📋 Requisitos

- Node.js (v14 o superior)
- MongoDB (local o Atlas)
- npm o yarn

## 🚀 Despliegue

### Backend
```bash
npm run build
npm start
```

### Frontend
```bash
cd frontend
npm run build
# Servir archivos estáticos generados en dist/
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Carlos Arias** - Desarrollo inicial

---

¡Gracias por usar Mi Blog API! 🎉
