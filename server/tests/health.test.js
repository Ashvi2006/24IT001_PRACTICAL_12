
const request = require('supertest');
const app = require('../server');

describe('Health API', () => {
  test('GET /api/health returns status 200', async () => {
    const response = await request(app).get('/api/health');

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('OK');
    expect(response.body.message).toBe(
      'Student Portfolio API is running'
    );
  });
});
