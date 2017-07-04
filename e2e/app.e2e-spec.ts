import { AngularGetStartedPage } from './app.po';

describe('angular-get-started App', () => {
  let page: AngularGetStartedPage;

  beforeEach(() => {
    page = new AngularGetStartedPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
