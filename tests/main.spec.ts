import { test, expect } from '@playwright/test';

test('search', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Suche').click();
  await page.getByPlaceholder('Suche').fill('punkt');
  await expect(page.getByRole('cell', { name: 'Punktifizieren' })).toBeVisible();
  await page.getByPlaceholder('Suche').click();
  await page.getByPlaceholder('Suche').fill('Zuhaus');
  await expect(page.getByRole('cell', { name: 'Homies' })).toBeVisible();
});