export const mockBrowser = () => {
  const MockBrowser = require('mock-browser').mocks.MockBrowser;
  const mock = new MockBrowser();

  (global as any).window = mock.getWindow();
  (global as any).document = mock.getDocument();
  (global as any).navigator = mock.getNavigator();
  (global as any).btoa = undefined;
  (global as any).atob = undefined;
  (global as any).location = mock.getLocation();

  Object.defineProperty(window.document.body.style, 'transform', {
    value: () => ({
      enumerable: true,
      configurable: true,
    }),
  });

  class SpeechSynthesisUtterance {}

  (global as any).SpeechSynthesisUtterance = SpeechSynthesisUtterance;
};
