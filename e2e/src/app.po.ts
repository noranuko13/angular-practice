import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getText(key: string): Promise<string> {
    return element(by.css(key)).getText() as Promise<string>;
  }

  getTitleText(): Promise<string> {
    return this.getText('app-root h1');
  }
}
