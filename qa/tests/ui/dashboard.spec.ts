import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';

test.describe('Dashboard Tests', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('admin', 'password');

    await expect(page).toHaveURL('/dashboard');
  });

  test('Verify dashboard is loaded successfully', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);

    await expect(dashboardPage.dashboardHeader).toBeVisible();
    await expect(dashboardPage.dashboardHeader).toHaveText('Dashboard');
  });

  test('Verify user profile is visible', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);

    await expect(dashboardPage.profileIcon).toBeVisible();
  });

  test('Verify navigation to settings page', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);

    await dashboardPage.goToSettings();
    await expect(page).toHaveURL('/settings');
  });

  test('Verify logout functionality', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);

    await dashboardPage.logout();
    await expect(page).toHaveURL('/login');
  });

});
