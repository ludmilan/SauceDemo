import {ClientFunction} from 'testcafe'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'

const loginUrl = 'https://www.saucedemo.com/'
const homeUrl = 'https://www.saucedemo.com/inventory.html'

const getUrl = ClientFunction(() => window.location.href);

fixture('Home Page')
.page(loginUrl)
.beforeEach(async t => {

    LoginPage.setUserName('performance_glitch_user');
    LoginPage.setPassword('secret_sauce');
    LoginPage.clickOnLoginButton();

    await t
    .wait(5000);

});

test('Verify Sauce Labs Fleece Jacket Price', async t => {

    HomePage.verifySLFJacket();
    await t
    .wait(5000)
    .expect(HomePage.SLFJacket.innerText).contains('Sauce Labs Fleece Jacket')
    .expect(HomePage.SLFJacketPrice.innerText).contains('$49.99')
});

