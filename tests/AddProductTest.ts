import {ClientFunction} from 'testcafe'
//import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import AddproductPage from '../pages/AddproductPage'
import {faker} from '@faker-js/faker';


const loginUrl = 'https://www.saucedemo.com/'
//const homeUrl = 'https://www.saucedemo.com/inventory.html'
//const getUrl = ClientFunction(() => window.location.href);

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const postalCode = faker.datatype.string();

fixture('Add Product Page')
.page(loginUrl)
.beforeEach(async t => {

    LoginPage.setUserName('performance_glitch_user');
    LoginPage.setPassword('secret_sauce');
    LoginPage.clickOnLoginButton();

    await t
    .wait(5000);

});

test('Add two Products into the cart', async t => {

    AddproductPage.AddProduct();
    await t
    .wait(5000)
    .expect(AddproductPage.CartCountLbl.innerText).contains('2')
});

test('Click cart icon in the top', async t =>{
    AddproductPage.ClickShoplinkBtn();
    await t
    .wait(5000)
    .expect(AddproductPage.YourCartLbl.innerText).contains('YOUR CART')
})

test('Verify if the selected items are in the cart', async t => {

    //AddproductPage.VerifySelectedItems();
    await t
    .wait(5000)
    .expect(AddproductPage.ItemOne.innerText).contains('Sauce Labs Backpack')
    .expect(AddproductPage.ItemTwo.innerText).contains('Sauce Labs Bike Light')
});

test('Click checkout button', async t => {

    AddproductPage.ClickCheckOutBtn();
    await t
    .wait(5000)
    .expect(AddproductPage.CheckOutLbl.innerText).contains('CHECKOUT: YOUR INFORMATION')
});

/*test('Provide a random firstname, lastname and a zip code',async t =>{

    await t
    
    AddproductPage.setFirstName(firstName);
    AddproductPage.setLastName(lastName);
    AddproductPage.setPostalCode(postalCode);
    
    AddproductPage.clickOnContinueButton();
    

});*/

