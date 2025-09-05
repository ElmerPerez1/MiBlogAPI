import { Link } from 'react-router-dom'
import { Edit, Trash2, Eye, Calendar, Plus } from 'lucide-react'
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
      month: 'long',
      day: 'numeric'
    })
  }

  const truncateContent = (content, maxLength = 150) => {
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
    <div>
      <div className="page-header">
        <h1 className="page-title">Mi Blog Personal</h1>
        <p className="page-subtitle">
          Bienvenido a mi espacio digital donde comparto ideas, experiencias y conocimientos
        </p>
      </div>

      {articles.length === 0 ? (
        <div className="card">
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h3>No hay artículos disponibles</h3>
            <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
              ¡Comienza creando tu primer artículo!
            </p>
            <Link to="/create" className="btn-primary">
              <Plus size={18} />
              Crear primer artículo
            </Link>
          </div>
        </div>
      ) : (
        <div className="article-grid">
          {articles.map((article) => (
            <article key={article._id} className="card article-card">
              <img
                src={getImageUrl(article.imgUrl)}
                alt={article.titulo}
                className="article-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300?text=No+Image'
                }}
              />
              
              <h2 className="article-title">{article.titulo}</h2>
              
              <div className="article-date">
                <Calendar size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
                {formatDate(article.fecha)}
              </div>
              
              <p className="article-content">
                {truncateContent(article.contenido)}
              </p>
              
              <div className="article-actions">
                <Link to={`/article/${article._id}`} className="btn btn-secondary">
                  <Eye size={16} />
                  Ver más
                </Link>
                <Link to={`/edit/${article._id}`} className="btn btn-secondary">
                  <Edit size={16} />
                  Editar
                </Link>
                <button
                  onClick={() => handleDelete(article._id)}
                  className="btn btn-danger"
                >
                  <Trash2 size={16} />
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
