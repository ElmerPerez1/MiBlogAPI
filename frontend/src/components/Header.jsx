import { Link } from 'react-router-dom'
import { PenTool, Plus } from 'lucide-react'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <PenTool size={28} />
          Mi Blog
        </Link>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Inicio</Link>
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
