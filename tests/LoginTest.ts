import {ClientFunction} from 'testcafe'
//import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'

const url = 'https://www.saucedemo.com/'
const getUrl = ClientFunction(() => window.location.href);

fixture('Login Page')
.page(url)

test('Loading Login Page', async t => {

    await t
    .expect(getUrl()).contains(url)
    .expect(LoginPage.loginBtn.exists).ok();

});

test('Successfully Login', async t => {

    LoginPage.setUserName('performance_glitch_user');
    LoginPage.setPassword('secret_sauce');
    LoginPage.clickOnLoginButton();

    //await t.expect(HomePage.responseCard.innerText).contains('You logged into a secure area');
    await t.wait(5000)

});

