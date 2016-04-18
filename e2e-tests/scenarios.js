'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/contacts");
  });


  describe('contacts', function() {

    beforeEach(function() {
      browser.get('index.html#/contacts');
    });


    it('should render myContacts when user navigates to /contacts', function() {
      expect(element.all(by.css('body > div > div.row > div > h1')).first().getText()).
        toMatch(/myContacts/);
    });

  });

});
