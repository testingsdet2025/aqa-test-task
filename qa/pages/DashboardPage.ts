import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly dashboardHeader: Locator;
  readonly profileIcon: Locator;
  readonly settingsLink: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dashboardHeader = page.locator('h1');
    this.profileIcon = page.locator('#profileIcon');
    this.settingsLink = page.locator('#settingsLink');
    this.logoutButton = page.locator('#logoutBtn');
  }

  async goToSettings() {
    await this.settingsLink.click();
  }

  async logout() {
    await this.profileIcon.click();
    await this.logoutButton.click();
  }
}
