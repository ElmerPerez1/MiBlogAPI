# Backend - Mi Blog API

Servidor RESTful para la aplicación de blog. Gestiona artículos, subida de imágenes y conexión a MongoDB.

## ⚙️ Stack
- Node.js + Express
- MongoDB + Mongoose
- Multer (subida de imágenes)
- Jest + Supertest (tests)
- CORS

## 📁 Estructura
```
controladores/      # Lógica de negocio (articulo.js)
rutas/              # Definición de endpoints Express
modelos/            # Modelos Mongoose (articulo.js)
basededatos/        # Conexión a MongoDB
helpers/            # Validaciones y utilidades
Imagenes/           # Carpeta pública de imágenes
  articulos/        # Imágenes subidas por usuarios
index.js            # Entry point Express
```

## 🔌 Endpoints
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /api/listar | Lista todos los artículos |
| GET | /api/listar/:ultimos? | Lista últimos N artículos |
| GET | /api/articulo/:id | Obtiene un artículo |
| POST | /api/crear | Crea un nuevo artículo |
| PUT | /api/actualizar/:id | Actualiza un artículo |
| DELETE | /api/borrar/:id | Elimina un artículo |
| POST | /api/subir-imagen/:id | Sube imagen y la asocia |

### Respuesta típica de listado
```json
{
  "status": "success",
  "contador": 3,
  "consulta": [
    {"_id": "...", "titulo": "...", "contenido": "...", "imgUrl": "articulo123futbol.jpg", "fecha": "2025-09-05T..."}
  ]
}
```

## 🖼️ Flujo de Imágenes
1. El artículo se crea con `imgUrl: "default.png"`
2. Se llama a `POST /api/subir-imagen/:id` enviando `file0`
3. Multer guarda el archivo en `Imagenes/articulos/`
4. El controlador actualiza el documento: `imgUrl = nombreDeArchivo`
5. El frontend construye la URL: `http://localhost:3900/imagenes/articulos/<imgUrl>`

### Importante (Windows)
- La carpeta es `Imagenes` (mayúscula). Se sirve como `/imagenes` en Express: 
  ```js
  app.use('/imagenes', express.static('./Imagenes'))
  ```
- En Windows no es case-sensitive, pero en Linux sí. Si despliegas, respeta el mismo casing.

## 🧪 Tests
Ejecutar tests:
```bash
npm test
```
Usa:
- `mongodb-memory-server` para una BD en memoria
- `supertest` para peticiones a la API

## 🛠️ Scripts
| Script | Descripción |
|--------|------------|
| `npm start` | Inicia servidor con nodemon |
| `npm run dev` | Alias de start |
| `npm test` | Corre tests Jest |
| `npm run setup` | Instala backend + frontend |
| `npm run frontend` | Arranca solo frontend |

## 🧩 Modelo Artículo
```js
{
  titulo: String,        // Requerido
  contenido: String,     // Requerido
  fecha: Date,           // Default: Date.now
  imgUrl: String         // Default: "default.png"
}
```

## 🔍 Validaciones
Se usan en controlador `crear` y `editar` con helper `validarArticulo`.
Devuelve 400 si faltan campos.

## 🧯 Troubleshooting
| Problema | Causa | Solución |
|----------|-------|----------|
| Imagen no se ve | `imgUrl` sigue como `default.png` | Verifica que se llamó a `/subir-imagen/:id` después de crear |
| 404 al cargar imagen | Carpeta mal nombrada | Asegura `Imagenes/articulos/` existe |
| CORS error | Backend sin correr | Inicia backend antes del frontend |
| No lista artículos | BD vacía | Crea uno con POST `/api/crear` |

## 🛡️ Producción
- Usa variables de entorno para cadena Mongo
- Sirve frontend desde un reverse proxy o un build separado
- Protege subida de archivos (tamaño, tipos)

## ✅ Checklist antes de deploy
- [ ] `.env` con cadena Mongo
- [ ] Carpeta `Imagenes/articulos` creada
- [ ] Logs reducidos
- [ ] Tests pasando

---
Backend listo ✅
