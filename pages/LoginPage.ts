import {Selector, t} from 'testcafe'

class LoginPage{

    public userNameInput:Selector;
    public passwordInput:Selector;
    public loginBtn:Selector;

    constructor(){
        this.userNameInput = Selector('#user-name');
        this.passwordInput = Selector('#password');
        this.loginBtn = Selector('#login-button');
    }

    async setUserName(userName:string){
        await t
        .typeText(this.userNameInput, userName)
    }

    async setPassword(password:string){
        await t
        .typeText(this.passwordInput, password);
    }

    async clickOnLoginButton(){
        await t
        .click(this.loginBtn);
    }

}

export default new LoginPage();