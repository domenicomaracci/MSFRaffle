describe('CDBU Modern Software Factory UI Test - Pre-Prod Environment', function() {
  it('should add a todo', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://MSFDemo.gpvn33bcqg.us-east-2.elasticbeanstalk.com');
    element(by.css('[name="name"]')).sendKeys('Selenium Test User');
    element(by.buttonText('Submit')).click();
    });
});