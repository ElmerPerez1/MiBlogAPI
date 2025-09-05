import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import ArticleList from './components/ArticleList'
import ArticleDetail from './components/ArticleDetail'
import CreateArticle from './components/CreateArticle'
import EditArticle from './components/EditArticle'
import { getArticles } from './services/articleService'
import './App.css'

function App() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  const loadArticles = async () => {
    console.log('loadArticles - iniciando carga...')
    try {
      const data = await getArticles()
      console.log('loadArticles - datos recibidos:', data)
      setArticles(data.consulta || [])
      console.log('loadArticles - artículos guardados:', data.consulta || [])
    } catch (error) {
      console.error('Error loading articles:', error)
    } finally {
      setLoading(false)
      console.log('loadArticles - carga completada')
    }
  }

  useEffect(() => {
    loadArticles()
  }, [])

  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={
                <ArticleList 
                  articles={articles} 
                  loading={loading} 
                  onArticlesChange={loadArticles}
                />
              } 
            />
            <Route path="/article/:id" element={<ArticleDetail />} />
            <Route 
              path="/create" 
              element={<CreateArticle onArticleCreated={loadArticles} />} 
            />
            <Route 
              path="/edit/:id" 
              element={<EditArticle onArticleUpdated={loadArticles} />} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
