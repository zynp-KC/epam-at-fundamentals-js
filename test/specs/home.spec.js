describe('EPAM home page', () => {
    it('should open the home page and have EPAM in the title', async () => {
        await browser.url('/');
        await expect(browser).toHaveTitle(/EPAM/);
    });

    it('should display the page header (CSS selector)', async () => {
        await browser.url('/');
        const header = await $('header');
        await expect(header).toBeExisting();
    });
}); 