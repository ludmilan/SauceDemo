import {Selector, t} from 'testcafe'

class FinalCheckoutPage{

    public ProductOneBtn:Selector;
    public ProductTwoBtn:Selector;
    public CartCountLbl:Selector;
    public ShopCartLinkBtn:Selector;
    public ItemOne:Selector;
    public ItemTwo:Selector;
    public CheckOutBtn:Selector;
    public CheckOutLbl:Selector;
    public FirstNameFld:Selector;
    public LastNameFld:Selector;
    public PostCodeFld:Selector;
    public CountinueBtn:Selector;
    public FinishBtn:Selector;
    public CheckoutCpmlteLbl:Selector;
    public BackHomebtn:SelectorAPI;

    constructor(){
        this.ProductOneBtn = Selector('#add-to-cart-sauce-labs-backpack');
        this.ProductTwoBtn = Selector('#add-to-cart-sauce-labs-bike-light');
        this.CartCountLbl = Selector('#shopping_cart_container > a > span');
        this.ShopCartLinkBtn = Selector('#shopping_cart_container > a');
        this.ItemOne = Selector('#item_4_title_link > div');
        this.ItemTwo = Selector('#item_0_title_link > div');
        this.CheckOutBtn = Selector('#checkout');
        this.CheckOutLbl = Selector('#header_container > div.header_secondary_container > span');
        this.FirstNameFld = Selector('#first-name');
        this.LastNameFld = Selector('#last-name');
        this.PostCodeFld = Selector('#postal-code');
        this.CountinueBtn = Selector('#continue');
        this.FinishBtn = Selector('#finish');
        this.CheckoutCpmlteLbl = Selector('#header_container > div.header_secondary_container > span')
        this.BackHomebtn = Selector('#back-to-products');
    }

    async ClickShoplinkBtn(){
        await t
        .click(this.ProductOneBtn)
        .click(this.ProductTwoBtn)
        .click(this.ShopCartLinkBtn);
    }

    async ClickCheckOutBtn(){
        await t
        .click(this.ShopCartLinkBtn)
        .click(this.CheckOutBtn);
    }

   async setFirstName(firstName:string){
        await t
        .typeText(this.FirstNameFld, firstName)
    }

    async setLastName(lastName:string){
        await t
        //.click(this.LastNameFld)
        .typeText(this.LastNameFld, lastName)
    }

    async setPostalCode(postalCode:string){
        await t
        //.click(this.PostCodeFld)
        .typeText(this.PostCodeFld, postalCode)
    }

    async clickOnContinueButton(){
        await t
        .click(this.CountinueBtn);
    }

    async clickOnFinishButton(){
        await t
        .click(this.FinishBtn);
    }

}

export default new FinalCheckoutPage();