import { test as base } from '@playwright/test';
import { ApiClient } from '../api/ApiClient';

export const test = base.extend({
  api: async ({}, use) => {
    const api = new ApiClient();
    await use(api);
  }
});
