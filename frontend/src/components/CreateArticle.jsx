import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, Save, Upload, Edit3 } from 'lucide-react'
import { createArticle, uploadImage } from '../services/articleService'

const CreateArticle = ({ onArticleCreated }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    titulo: '',
    contenido: ''
  })
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Crear el artículo
      const response = await createArticle(formData)
      const articleId = response.articulo._id

      // Subir imagen si hay una seleccionada
      if (image && articleId) {
        await uploadImage(articleId, image)
      }

      // Actualizar la lista de artículos y navegar
      if (onArticleCreated) {
        onArticleCreated()
      }
      navigate('/')
    } catch (error) {
      console.error('Error creating article:', error)
      alert('Error al crear el artículo')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="full-width-container" style={{ padding: '2rem' }}>
      <div style={{ marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
        <Link to="/" className="btn btn-secondary">
          <ArrowLeft size={16} />
          Volver al Inicio
        </Link>
      </div>

      <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <Edit3 size={48} style={{ color: '#4c51bf', marginBottom: '1rem' }} />
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '900', 
            color: '#2d3748',
            marginBottom: '0.5rem',
          }}>
            Crear Nuevo Artículo
          </h1>
          <p style={{ 
            color: '#4a5568', 
            fontSize: '1.2rem',
            fontWeight: '400' 
          }}>
            Comparte tus ideas y conocimientos con el mundo
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="titulo" className="form-label">
              Título del Artículo *
            </label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              value={formData.titulo}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Escribe un título atractivo..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contenido" className="form-label">
              Contenido *
            </label>
            <textarea
              id="contenido"
              name="contenido"
              value={formData.contenido}
              onChange={handleInputChange}
              className="form-textarea"
              rows="12"
              placeholder="Comparte tu conocimiento aquí..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="image" className="form-label">
              Imagen (opcional)
            </label>
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              className="form-file"
              accept="image/*"
            />
            <small style={{ 
              color: '#4a5568', 
              fontSize: '0.9rem',
              fontWeight: '500',
              display: 'block',
              marginTop: '0.5rem'
            }}>
              Formatos soportados: JPG, PNG, GIF | Tamaño máximo: 5MB
            </small>
          </div>

          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center',
            marginTop: '2.5rem',
            flexWrap: 'wrap'
          }}>
            <Link to="/" className="btn btn-secondary">
              Cancelar
            </Link>
            <button 
              type="submit" 
              className="btn-primary"
              disabled={loading}
              style={{ minWidth: '200px' }}
            >
              {loading ? (
                <>
                  <Upload size={18} />
                  Creando...
                </>
              ) : (
                <>
                  <Save size={18} />
                  Crear Artículo
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateArticle
