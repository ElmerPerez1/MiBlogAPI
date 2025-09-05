import { Link } from 'react-router-dom'
import { BookOpen, Plus, Layers } from 'lucide-react'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <Layers size={28} style={{ color: '#4c51bf' }} />
          <span style={{ 
            background: 'linear-gradient(135deg, #4c51bf 0%, #667eea 50%, #764ba2 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '900'
          }}>
            Modern Blog
          </span>
        </Link>
        <nav className="nav-links">
          <Link to="/" className="nav-link">
            <BookOpen size={18} />
            Artículos
          </Link>
          <Link to="/create" className="btn-primary">
            <Plus size={18} />
            Nuevo Artículo
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
