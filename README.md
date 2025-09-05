# Mi Blog API - Full Stack

Blog full stack moderno (Node.js + React) con subida de imágenes, API REST limpia y frontend minimalista.

## 📚 Documentación Detallada
- [Backend (API)](README_BACKEND.md)
- [Frontend (UI)](README_FRONTEND.md)

Si es tu primera vez, sigue la sección de Instalación Rápida.

## 🚀 Características

### Backend (API REST)
- **Node.js + Express** - Servidor web robusto
- **MongoDB + Mongoose** - Base de datos NoSQL
- **Multer** - Subida de imágenes
- **CORS** - Configuración para frontend
- **Validaciones** - Datos seguros y consistentes
- **Tests** - Suite completa con Jest

### Frontend (React)
- **React + Vite** - Desarrollo rápido
- **React Router** - Navegación SPA
- **Axios** - Consumo de API
- **Diseño responsive** - Mobile-first
- **Tema minimalista verde** sin animaciones (opcional)

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

## 📡 API Endpoints (Resumen)

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

## 🖼️ Manejo de Imágenes
1. Se crea el artículo con `imgUrl: "default.png"`
2. Frontend llama a `/api/subir-imagen/:id` con campo `file0`
3. Multer guarda archivo en `Imagenes/articulos/`
4. El controlador actualiza el documento (`imgUrl` = nombre del archivo)
5. Frontend muestra: `http://localhost:3900/imagenes/articulos/<imgUrl>`

Si no hay imagen → placeholder.

## 🧪 Testing

```bash
# Ejecutar tests del backend
npm test

# Ejecutar tests en modo watch
npm run test:watch
```

## 🧯 Troubleshooting Rápido
| Problema | Causa | Solución |
|----------|-------|----------|
| Imagen no se muestra | `imgUrl` sigue como `default.png` | Asegura que se llamó a subir imagen tras crear |
| 404 en imagen | Ruta o carpeta errónea | Confirmar carpeta `Imagenes/articulos` y casing |
| Lista vacía | BD sin datos | Crear artículo con `POST /api/crear` |
| CORS error | Backend caído | Levantar backend `npm start` |
| Error EADDRINUSE | Puerto ocupado | Cerrar procesos `node` y reiniciar |

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
> Tip: Si necesitas dark mode, paginación o búsqueda, revisa la sección "Mejoras Futuras" en los READMEs específicos.

---

¡Gracias por usar Mi Blog API! 🎉
