import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Aleksandra Voronova');
});

test('test navigation: Home', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('text=Home').first()).toHaveAttribute('href', '#home');
});
test('test navigation: Education', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('text=Education').first()).toHaveAttribute('href', '#education');
});
test('test navigation: Skills', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('text=Skills').first()).toHaveAttribute('href', '#skills');
});
test('test navigation: Interests', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('text=Interests').first()).toHaveAttribute('href', '#interests');
});
test('test navigation: Awards', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('text=Awards').first()).toHaveAttribute('href', '#awards');
});
test('test navigation: API', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('text=API').first()).toHaveAttribute('href', '#api');
});
test('test navigation: Contact', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('text=Contact Me').first()).toHaveAttribute('href', '#contact');
});
