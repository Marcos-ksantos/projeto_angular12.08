import { test, expect } from '@playwright/test';
import { async } from 'rxjs';


test('deve abrir página inicial', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await expect(page.getByText('Cadastrar Atleta')).toBeVisible();
});




test('deve cadastrar-se', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  await page.locator('#nome').fill('Marcos');

  await page.locator('#data').fill('2006-05-10');

  await page.locator('#cpf').fill('12345678900');

  await page.locator('input[value="M"]').check();

  await page.locator('#cep').fill('49000000');

  await page.locator('#uf').fill('SE');

  await page.locator('#cidade').fill('Nossa Senhora do Socorro');

  await page.locator('#bairro').fill('Parque dos Farois');

  await page.getByRole('button', { name: 'Cadastrar' }).click();

  await page.goto('http://localhost:4200/cadastros');

  await expect(page.getByText('Marcos').first()).toBeVisible();
});

 
test('deve navegar entre os links', async ({ page }) => {
  await page.goto('http://localhost:4200/menu');

  await page.getByRole('link', { name: 'Cadastro', exact: true }).first().click();
  await page.getByRole('link', { name: 'Lista Cadastrados', exact: true }).click();
  await page.getByRole('link', { name: 'Cadastro Corrida', exact: true }).click();
  await page.getByRole('link', { name: 'Lista Cadastrados', exact: true }).click();
  await page.getByRole('link', { name: 'Lista Corridas', exact: true }).click();
  await page.getByRole('link', { name: 'Inscreva-se', exact: true }).click();
  await page.getByRole('link', { name: 'Home', exact: true }).click();
});
/*test('deve excluir o cadastro',({page})=>)*/

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
