const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require('../pageobjects/home.page');

Given(/^User opens the 99.co application$/, async () => {
    // Sesi Appium sudah otomatis berjalan
});

Then(/^User should see the search section on homepage$/, async () => {
    const isDisplayed = await HomePage.isSearchInputDisplayed();
    expect(isDisplayed).toBe(true);
});

When(/^User clicks on the search bar$/, async () => {
    await HomePage.clickSearchInput();
});

Then(/^User types "([^"]*)" in search bar$/, async (location) => {
    await HomePage.typeSearchLocation(location);
});

When(/^User clicks on "Hunian Baru" tab$/, async () => {
    await HomePage.clickHunianBaru();
});

Then(/^User clicks on "Akun Saya" tab$/, async () => {
    await HomePage.clickAkunSaya();
});