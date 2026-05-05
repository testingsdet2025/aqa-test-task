import { test, expect } from '@playwright/test';
import { ApiClient } from '../../api/ApiClient';
import { ENDPOINTS } from '../../api/endpoints';

test.describe('Auth API Tests', () => {

  let api: ApiClient;

  test.beforeEach(() => {
    api = new ApiClient();
  });

  test('Login with valid credentials', async () => {
    const response = await api.post(ENDPOINTS.LOGIN, {
      username: 'admin',
      password: 'password'
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty('token');
    expect(body.token).not.toBeNull();
  });

  test('Login with invalid credentials', async () => {
    const response = await api.post(ENDPOINTS.LOGIN, {
      username: 'admin',
      password: 'wrongpassword'
    });

    expect(response.status()).toBe(401);

    const body = await response.json();
    expect(body).toHaveProperty('error');
  });

  test('Login with missing fields', async () => {
    const response = await api.post(ENDPOINTS.LOGIN, {
      username: ''
    });

    expect(response.status()).toBe(400);

    const body = await response.json();
    expect(body).toHaveProperty('message');
  });

  test('Access protected API with valid token', async () => {
    // Step 1: Login and get token
    const loginResponse = await api.post(ENDPOINTS.LOGIN, {
      username: 'admin',
      password: 'password'
    });

    const loginBody = await loginResponse.json();
    const token = loginBody.token;

    // Step 2: Call protected API
    const context = await (await import('@playwright/test')).request.newContext({
      extraHTTPHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    const response = await context.get(ENDPOINTS.USERS);

    expect(response.status()).toBe(200);
  });

  test('Access protected API with invalid token', async () => {
    const context = await (await import('@playwright/test')).request.newContext({
      extraHTTPHeaders: {
        Authorization: `Bearer invalid_token`
      }
    });

    const response = await context.get(ENDPOINTS.USERS);

    expect(response.status()).toBe(401);
  });

});
