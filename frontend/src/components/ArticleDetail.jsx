import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Edit } from 'lucide-react'
import { getArticle, getImageUrl } from '../services/articleService'

const ArticleDetail = () => {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const data = await getArticle(id)
        setArticle(data.articulo)
      } catch (err) {
        setError('Error al cargar el artículo')
        console.error('Error loading article:', err)
      } finally {
        setLoading(false)
      }
    }

    loadArticle()
  }, [id])

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) {
    return (
      <div className="loading">
        <p>Cargando artículo...</p>
      </div>
    )
  }

  if (error || !article) {
    return (
      <div className="card">
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h3>Error</h3>
          <p style={{ color: '#ef4444', marginBottom: '1.5rem' }}>
            {error || 'Artículo no encontrado'}
          </p>
          <Link to="/" className="btn btn-secondary">
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/" className="btn btn-secondary">
          <ArrowLeft size={16} />
          Volver al inicio
        </Link>
      </div>

      <article className="card">
        <div style={{ marginBottom: '2rem' }}>
          <img
            src={getImageUrl(article.imgUrl)}
            alt={article.titulo}
            style={{
              width: '100%',
              maxHeight: '400px',
              objectFit: 'cover',
              borderRadius: '12px',
              marginBottom: '1.5rem'
            }}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/800x400?text=No+Image'
            }}
          />
          
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '800', 
            color: '#1f2937', 
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            {article.titulo}
          </h1>
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem',
            marginBottom: '2rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid #e5e7eb'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6b7280' }}>
              <Calendar size={16} />
              {formatDate(article.fecha)}
            </div>
            <Link to={`/edit/${article._id}`} className="btn btn-secondary">
              <Edit size={16} />
              Editar artículo
            </Link>
          </div>
        </div>

        <div style={{
          fontSize: '1.125rem',
          lineHeight: '1.8',
          color: '#374151',
          whiteSpace: 'pre-wrap'
        }}>
          {article.contenido}
        </div>
      </article>
    </div>
  )
}

export default ArticleDetail
