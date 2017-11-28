import { AngularPartPage } from './app.po';

describe('angular-part App', () => {
  let page: AngularPartPage;

  beforeEach(() => {
    page = new AngularPartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
