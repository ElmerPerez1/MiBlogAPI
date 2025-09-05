import { Link } from 'react-router-dom'
import { Edit, Trash2, Eye, Calendar, Plus, Leaf } from 'lucide-react'
import { deleteArticle, getImageUrl } from '../services/articleService'

const ArticleList = ({ articles, loading, onArticlesChange }) => {
  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este artículo?')) {
      try {
        await deleteArticle(id)
        onArticlesChange()
      } catch (error) {
        console.error('Error deleting article:', error)
        alert('Error al eliminar el artículo')
      }
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const truncateContent = (content, maxLength = 120) => {
    if (content.length <= maxLength) return content
    return content.substr(0, maxLength) + '...'
  }

  if (loading) {
    return (
      <div className="loading">
        <p>Cargando artículos...</p>
      </div>
    )
  }

  return (
    <div className="full-width-container">
      <div className="page-header">
        <h1 className="page-title">
          <Leaf size={40} style={{ display: 'inline', marginRight: '0.75rem' }} />
          Blog Minimalista
        </h1>
        <p className="page-subtitle">
          Contenido simple, elegante y directo al punto
        </p>
      </div>

      {articles.length === 0 ? (
        <div style={{ padding: '0 2rem' }}>
          <div className="card">
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <Leaf size={48} style={{ color: '#2f855a', marginBottom: '1rem' }} />
              <h3 style={{ color: '#2d3748', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                No hay artículos disponibles
              </h3>
              <p style={{ color: '#4a5568', marginBottom: '1.5rem', fontSize: '1rem' }}>
                Comienza creando tu primer artículo
              </p>
              <Link to="/create" className="btn-primary">
                <Plus size={18} />
                Crear Artículo
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="article-grid">
          {articles.map((article, index) => (
            <article key={article._id} className="card article-card">
              <img
                src={getImageUrl(article.imgUrl)}
                alt={article.titulo}
                className="article-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x250/2f855a/ffffff?text=Imagen'
                }}
              />
              
              <h2 className="article-title">
                {article.titulo}
              </h2>
              
              <div className="article-date">
                <Calendar size={14} style={{ display: 'inline', marginRight: '0.5rem' }} />
                {formatDate(article.fecha)}
              </div>
              
              <p className="article-content">
                {truncateContent(article.contenido)}
              </p>
              
              <div className="article-actions">
                <Link to={`/article/${article._id}`} className="btn btn-secondary">
                  <Eye size={14} />
                  Ver
                </Link>
                <Link to={`/edit/${article._id}`} className="btn btn-secondary">
                  <Edit size={14} />
                  Editar
                </Link>
                <button
                  onClick={() => handleDelete(article._id)}
                  className="btn btn-danger"
                >
                  <Trash2 size={14} />
                  Eliminar
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

export default ArticleList
