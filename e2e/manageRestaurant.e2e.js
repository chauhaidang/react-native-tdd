describe('Manage Restaurant', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should allow creating a restaurant', async () => {
    const restaurantName = 'BEEFSTEAK';
    await element(by.id('addRestaurant')).tap();
    await element(by.id('inputRestaurant')).typeText(restaurantName);
    await element(by.id('saveRestaurant')).tap();
    await expect(element(by.label(restaurantName))).toBeVisible();
    await expect(element(by.id('inputRestaurant'))).not.toBeVisible();
  });
});
