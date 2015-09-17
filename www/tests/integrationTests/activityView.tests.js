/**
 * Created by Opstrup on 17/09/15.
 */
/**
 * Integration test file for activity view controller
 */

describe('integration test of home view functionality', function() {

  beforeEach(function() {
    browser.get('http://localhost:8100/#/activity');
  });

  it('should have Docsys as title', function() {

    var title = element(by.className('title'));
    expect(title.getText()).toContain('Activities');
  });

  it("should have the correct url", function () {
    expect(browser.getLocationAbsUrl()).toMatch('/activity');
  });
});

