import { request } from '@playwright/test';

export class ApiClient {
  async get(endpoint: string) {
    const context = await request.newContext();
    return context.get(endpoint);
  }

  async post(endpoint: string, data: any) {
    const context = await request.newContext();
    return context.post(endpoint, { data });
  }
}
