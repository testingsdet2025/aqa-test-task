import { test, expect } from '@playwright/test';
import { ApiClient } from '../../api/ApiClient';
import { ENDPOINTS } from '../../api/endpoints';

test('Get users API', async () => {
  const api = new ApiClient();

  const response = await api.get(ENDPOINTS.USERS);
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body).toHaveProperty('data');
});
