import {Selector, t} from 'testcafe'

class HomePage{

    public SLFJacketBtn:Selector;
    public SLFJacket:Selector;
    public SLFJacketPrice:Selector;

    constructor(){
        this.SLFJacketBtn = Selector('#item_5_title_link > div');
        this.SLFJacket = Selector('#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_name.large_size');
        this.SLFJacketPrice = Selector('#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_price');
    }

    async verifySLFJacket(){
        await t
        .click(this.SLFJacketBtn);
    }

}

export default new HomePage();