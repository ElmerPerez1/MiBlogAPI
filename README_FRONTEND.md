# Frontend - Mi Blog

Interfaz de usuario del blog consumiendo la API REST.

## ⚙️ Stack
- React + Vite
- React Router DOM
- Axios
- Lucide Icons
- CSS modular simple

## 📁 Estructura
```
frontend/
  src/
    components/
      Header.jsx
      ArticleList.jsx
      ArticleDetail.jsx
      CreateArticle.jsx
      EditArticle.jsx
    services/
      articleService.js
    App.jsx
    App.css
    main.jsx
```

## 🔗 API Base
Configurada en `articleService.js`:
```js
const API_URL = 'http://localhost:3900/api'
```
Cambia para producción según tu dominio.

## 🖼️ Carga y Visualización de Imágenes
`articleService.getImageUrl(nombre)` construye:
```
http://localhost:3900/imagenes/articulos/<nombre>
```
Si `imgUrl` es `default.png` o vacío se muestra un placeholder.

## ➕ Flujo Crear Artículo
1. Formulario envía `titulo` y `contenido` → `POST /api/crear`
2. Se obtiene el `_id` devuelto
3. Si hay imagen seleccionada → `POST /api/subir-imagen/:id` con `file0`
4. Se refresca la lista

## 🛠️ Scripts (frontend/package.json)
| Script | Descripción |
|--------|------------|
| `npm run dev` | Servidor desarrollo (Vite) |
| `npm run build` | Build producción |
| `npm run preview` | Previsualizar build |

## 🧩 Componentes Clave
| Componente | Rol |
|------------|-----|
| `Header` | Navegación principal |
| `ArticleList` | Renderiza grilla de artículos |
| `ArticleDetail` | Muestra un artículo individual |
| `CreateArticle` | Form para crear |
| `EditArticle` | Form para editar |

## 🔐 Errores Comunes
| Situación | Solución |
|-----------|----------|
| Imágenes no se ven | Revisar `imgUrl` en respuesta de API |
| Lista vacía | Backend no devuelve `consulta` → ajustar parsing |
| CORS error | Asegurar backend corriendo con `app.use(cors())` |

## 🧪 Mejoras Futuras (sugerencias)
- Paginación en lista
- Búsqueda y filtros
- Drag & drop para imágenes
- Dark mode
- Optimizar imágenes (lazy loading)

---
Frontend listo ✅
