import { BeerMarketPage } from './app.po';

describe('beer-market App', function() {
  let page: BeerMarketPage;

  beforeEach(() => {
    page = new BeerMarketPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
