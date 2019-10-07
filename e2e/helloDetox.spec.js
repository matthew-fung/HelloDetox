describe('HelloDetoxTest', () => {
  beforeEach(async () => {
     await device.reloadReactNative();
   });
  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });
  it('should show hello Rect after tap', async () => {
    await element(by.id('hello_react')).tap();
    await expect(element(by.text('React!!!'))).toBeVisible();
   });
  it('should show Detox screen after tap', async () => {
    await element(by.id('detox_button')).tap();
    await expect(element(by.text('Detox!!!'))).toBeVisible();
   });
});