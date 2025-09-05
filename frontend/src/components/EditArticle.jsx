import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, Save, Upload } from 'lucide-react'
import { getArticle, updateArticle, uploadImage, getImageUrl } from '../services/articleService'

const EditArticle = ({ onArticleUpdated }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    titulo: '',
    contenido: ''
  })
  const [currentImage, setCurrentImage] = useState('')
  const [newImage, setNewImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [loadingArticle, setLoadingArticle] = useState(true)

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const data = await getArticle(id)
        const article = data.articulo
        setFormData({
          titulo: article.titulo,
          contenido: article.contenido
        })
        setCurrentImage(article.imgUrl)
      } catch (error) {
        console.error('Error loading article:', error)
        alert('Error al cargar el artículo')
        navigate('/')
      } finally {
        setLoadingArticle(false)
      }
    }

    loadArticle()
  }, [id, navigate])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleImageChange = (e) => {
    setNewImage(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Actualizar el artículo
      await updateArticle(id, formData)

      // Subir nueva imagen si hay una seleccionada
      if (newImage) {
        await uploadImage(id, newImage)
      }

      // Actualizar la lista de artículos y navegar
      onArticleUpdated()
      navigate(`/article/${id}`)
    } catch (error) {
      console.error('Error updating article:', error)
      alert('Error al actualizar el artículo')
    } finally {
      setLoading(false)
    }
  }

  if (loadingArticle) {
    return (
      <div className="loading">
        <p>Cargando artículo...</p>
      </div>
    )
  }

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <Link to={`/article/${id}`} className="btn btn-secondary">
          <ArrowLeft size={16} />
          Volver al artículo
        </Link>
      </div>

      <div className="card">
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            color: '#1f2937',
            marginBottom: '0.5rem'
          }}>
            Editar Artículo
          </h1>
          <p style={{ color: '#6b7280' }}>
            Realiza los cambios necesarios en tu artículo
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
              rows="10"
              placeholder="Escribe el contenido de tu artículo..."
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Imagen actual
            </label>
            {currentImage && (
              <div style={{ marginBottom: '1rem' }}>
                <img
                  src={getImageUrl(currentImage)}
                  alt="Imagen actual"
                  style={{
                    width: '200px',
                    height: '120px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    border: '2px solid #e5e7eb'
                  }}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/200x120?text=No+Image'
                  }}
                />
              </div>
            )}
            
            <label htmlFor="image" className="form-label">
              Cambiar imagen (opcional)
            </label>
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              className="form-file"
              accept="image/*"
            />
            <small style={{ color: '#6b7280', fontSize: '0.875rem' }}>
              Formatos soportados: JPG, PNG, GIF. Tamaño máximo: 5MB
            </small>
          </div>

          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'flex-end',
            marginTop: '2rem'
          }}>
            <Link to={`/article/${id}`} className="btn btn-secondary">
              Cancelar
            </Link>
            <button 
              type="submit" 
              className="btn-primary"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Upload size={16} />
                  Guardando...
                </>
              ) : (
                <>
                  <Save size={16} />
                  Guardar Cambios
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditArticle
