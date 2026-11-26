describe('EPAM about page', () => {
    it('should open the about page with /about in the URL', async () => {
        await browser.url('/about');
        await expect(browser).toHaveUrl(expect.stringContaining('/about'));
    });

    it('should display the main heading (XPath selector)', async () => {
        await browser.url('/about');
        const heading = await $('//h1');
        await expect(heading).toBeExisting();
    });
});