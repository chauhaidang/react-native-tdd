describe('App', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show "You Clicked!" label after tapping on "Click Me" button', async () => {
    await element(by.id('btn-click-me')).tap();
    await expect(element(by.text('You Clicked!'))).toBeVisible();
  });
});
