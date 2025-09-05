import axios from 'axios'

const API_URL = 'http://localhost:3900/api'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
})

export const getArticles = async (limit = null) => {
  try {
    const endpoint = limit ? `/listar/${limit}` : '/listar'
    const response = await api.get(endpoint)
    return response.data
  } catch (error) {
    console.error('Error fetching articles:', error)
    throw error
  }
}

export const getArticle = async (id) => {
  try {
    const response = await api.get(`/articulo/${id}`)
    return response.data
  } catch (error) {
    console.error('Error fetching article:', error)
    throw error
  }
}

export const createArticle = async (articleData) => {
  try {
    const response = await api.post('/crear', articleData)
    return response.data
  } catch (error) {
    console.error('Error creating article:', error)
    throw error
  }
}

export const updateArticle = async (id, articleData) => {
  try {
    const response = await api.put(`/actualizar/${id}`, articleData)
    return response.data
  } catch (error) {
    console.error('Error updating article:', error)
    throw error
  }
}

export const deleteArticle = async (id) => {
  try {
    const response = await api.delete(`/borrar/${id}`)
    return response.data
  } catch (error) {
    console.error('Error deleting article:', error)
    throw error
  }
}

export const uploadImage = async (id, file) => {
  try {
    const formData = new FormData()
    formData.append('file0', file)

    const response = await api.post(`/subir-imagen/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
    return response.data
  } catch (error) {
    console.error('Error uploading image:', error)
    throw error
  }
}

export const getImageUrl = (imageName) => {
  if (!imageName || imageName === 'default.png') {
    return 'https://via.placeholder.com/400x300?text=No+Image'
  }
  return `http://localhost:3900/imagenes/articulos/${imageName}`
}
