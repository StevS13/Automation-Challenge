class HomePage {
    // Locator
    get searchInput() {
        return $('~Lokasi, area, project');
    }

    get hunianBaruTab() {
        return $('~Hunian Baru\nTab 2 of 5');
    }

    get akunSayaTab() {
        return $('~Akun Saya\nTab 5 of 5');
    }

    // Method
    async isSearchInputDisplayed() {
        await this.searchInput.waitForDisplayed({ timeout: 15000 });
        return await this.searchInput.isDisplayed();
    }

    async clickSearchInput() {
        await this.searchInput.waitForDisplayed({ timeout: 10000 });
        await this.searchInput.click();
    }

    async typeSearchLocation(locationText) {
        await this.searchInput.setValue(locationText);
    }

    async clickHunianBaru() {
        await this.hunianBaruTab.waitForDisplayed({ timeout: 10000 });
        await this.hunianBaruTab.click();
    }

    async clickAkunSaya() {
        await this.akunSayaTab.waitForDisplayed({ timeout: 10000 });
        await this.akunSayaTab.click();
    }
}

module.exports = new HomePage();