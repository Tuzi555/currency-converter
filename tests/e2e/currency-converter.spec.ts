import { test, expect } from '@playwright/test';

test.describe('exchange rate app tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.route('*/**/cnb-exchange-rates', async (route) => {
            const body = `02 Oct 2024 #192
Country|Currency|Amount|Code|Rate
Bulgaria|lev|1|BGN|12.941
Brazil|real|1|BRL|4.219
Canada|dollar|1|CAD|16.955
Australia|dollar|1|AUD|15.772
`;
            await route.fulfill({ body });
        });
        await page.goto('/');
    });

    test('has title', async ({ page }) => {
        await expect(page).toHaveTitle(/CZK Exchange Rates/);
    });

    test('has exchange rate table', async ({ page }) => {
        const tableRows = page.getByTestId('exchange-rate-row');

        await expect(tableRows).toHaveCount(4);
    });

    test('has currency converter', async ({ page }) => {
        const tableRows = page.getByTestId('currency-converter');

        expect(tableRows).toBeDefined();
    });

    test('shows error page on fetch fail', async ({ page }) => {
        await page.route('*/**/cnb-exchange-rates', async (route) => {
            await route.fulfill({ status: 500 });
        });

        expect(page.getByText(/Oops.... something went wrong./)).toBeDefined();
    });
});
