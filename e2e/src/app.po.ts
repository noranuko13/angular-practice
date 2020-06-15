import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getText(key: string): Promise<string> {
    return element(by.css(key)).getText() as Promise<string>;
  }

  getTitleText(): Promise<string> {
    return this.getText('app-root h1');
  }
}
