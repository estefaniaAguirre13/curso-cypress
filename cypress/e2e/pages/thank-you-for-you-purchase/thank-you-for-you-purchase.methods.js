import { ThanYouForYouPurchaseElements } from "./thank-you-for-you-purchase.elements";

export class ThanYouForYouPurchaseMethods{
    static clickOnOkButton(){
        ThanYouForYouPurchaseElements.buttons.ok.click();
    }

    static verifyGreenCheckMarkIsDisplayed(){
        ThanYouForYouPurchaseElements.icons.greenCheckMark.should("exist")
    }
}