import { MYPROJECTPage } from './app.po';

describe('myproject App', function() {
  let page: MYPROJECTPage;

  beforeEach(() => {
    page = new MYPROJECTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
