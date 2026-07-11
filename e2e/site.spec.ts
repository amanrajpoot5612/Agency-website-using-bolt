import { expect, test } from '@playwright/test';

test('loads a direct case-study route and has one footer', async ({ page }) => {
  await page.goto('/work/bugsy');
  await expect(page.getByRole('heading', { level: 1, name: 'Bugsy' })).toBeVisible();
  await expect(page.locator('footer')).toHaveCount(1);
});

test('filters projects', async ({ page }) => {
  await page.goto('/work');
  await page.getByRole('button', { name: 'E-commerce' }).click();
  await expect(page.getByText('Showing 1 project')).toBeVisible();
});

test('opens and closes mobile navigation', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile');
  await page.goto('/');
  await page.getByRole('button', { name: 'Toggle menu' }).click();
  await expect(page.getByRole('dialog', { name: 'Mobile navigation' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog', { name: 'Mobile navigation' })).toBeHidden();
});

test('submits the short contact form', async ({ page }) => {
  await page.route('**/schedule-consultation', (route) => route.fulfill({ status: 200, contentType: 'application/json', body: '{}' }));
  await page.goto('/contact');
  await page.getByLabel('Name').fill('Ada Lovelace');
  await page.getByLabel('Email').fill('ada@example.com');
  await page.getByLabel('Message').fill('I need a website.');
  await page.getByRole('button', { name: 'Send message' }).click();
  await expect(page.getByText(/Message sent/)).toBeVisible();
});
