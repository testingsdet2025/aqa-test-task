import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('User should login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('admin', 'password');

  await expect(page).toHaveURL('/dashboard');
});
