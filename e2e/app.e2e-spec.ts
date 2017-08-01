import { MyAppsPage } from './app.po';

describe('my-apps App', () => {
  let page: MyAppsPage;

  beforeEach(() => {
    page = new MyAppsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
