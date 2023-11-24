const request = require('supertest');
const app = require('../app'); 

describe('Email Verification', () => {
  test('User not found for verification', async () => {
    const response = await request(app).get('/users/verify/non_existent_token');
    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe('User not found');
  });
});
