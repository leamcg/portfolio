import { Portfolio2018Page } from './app.po';

describe('portfolio2018 App', () => {
  let page: Portfolio2018Page;

  beforeEach(() => {
    page = new Portfolio2018Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
