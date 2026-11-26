describe('EPAM careers page', () => {
    it('should open the careers page and show the footer (XPath selector)', async () => {
        await browser.url('/careers');
        const footer = await $('//footer');
        await expect(footer).toBeExisting();
    });
});