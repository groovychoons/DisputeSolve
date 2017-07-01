import { DisputeSolvePage } from './app.po';

describe('dispute-solve App', () => {
  let page: DisputeSolvePage;

  beforeEach(() => {
    page = new DisputeSolvePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
