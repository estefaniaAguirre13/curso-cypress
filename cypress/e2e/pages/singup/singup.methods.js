import { SingupElements } from "./singup.elements";

export class SingupMethods{
    static insertUsername(username){
        SingupElements.textboxes.username.invole('val', username)
    }

    static insertPassword(password){
        SingupElements.textboxes.password.invole('val', password)
    }

    static clickOnSignupnButton(){
        LoginElements.buttons.signup.click()
    }

    static login(username, password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnSignupnButton
    }
}
