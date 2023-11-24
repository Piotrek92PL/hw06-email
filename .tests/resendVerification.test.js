const request = require('supertest');
const app = require('../app');

describe('Resend Verification Email', () => {
  test('Missing email field', async () => {
    const response = await request(app).post('/users/verify').send({});
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('missing required field email');
  });
});
