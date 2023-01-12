import LoginPage from '../pages/LoginPage'
import FinalCheckoutPage from '../pages/FinalCheckoutPage';
import {faker} from '@faker-js/faker';

const loginUrl = 'https://www.saucedemo.com/'

const firstName = faker.name.firstName('male');
const lastName = faker.name.lastName('male');
const postalCode = faker.random.numeric(5);

fixture('Checkout Page')
.page(loginUrl)
.beforeEach(async t => {

    LoginPage.setUserName('performance_glitch_user');
    LoginPage.setPassword('secret_sauce');
    LoginPage.clickOnLoginButton();
    await t
    .wait(5000);

});

test('Provide a random firstname, lastname and postal code and click the finish button',async t =>{

    FinalCheckoutPage.ClickShoplinkBtn();
    FinalCheckoutPage.ClickCheckOutBtn();
    FinalCheckoutPage.setFirstName(firstName);
    FinalCheckoutPage.setLastName(lastName);
    FinalCheckoutPage.setPostalCode(postalCode);
    FinalCheckoutPage.clickOnContinueButton();
    FinalCheckoutPage.FinishBtn();
    await t
    .wait(5000)
    .expect(FinalCheckoutPage.CheckoutCpmlteLbl.innerText).contains('CHECKOUT: COMPLETE!')
});


