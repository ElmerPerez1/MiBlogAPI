const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
let app;

// Mock conexion para usar memoria
jest.mock('../basededatos/conexion', () => ({
  conexion: jest.fn()
}));

describe('API Articulos', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri, { dbName: 'test' });
    // Cargar app después de conectar
    app = require('../index');
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    if (mongoServer) await mongoServer.stop();
  });

  test('POST /api/crear valida datos faltantes', async () => {
    const res = await request(app).post('/api/crear').send({ titulo: '', contenido: '' });
    expect(res.statusCode).toBe(400);
    expect(res.body.status).toBe('error');
  });

  test('POST /api/crear crea articulo válido', async () => {
    const res = await request(app).post('/api/crear').send({ titulo: 'Titulo valido', contenido: 'Contenido de prueba' });
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.articulo).toHaveProperty('_id');
  });

  test('GET /api/listar retorna lista', async () => {
    const res = await request(app).get('/api/listar');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('success');
    expect(Array.isArray(res.body.consulta)).toBe(true);
  });
});
