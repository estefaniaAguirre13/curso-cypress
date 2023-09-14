export class CommonPageElements{
    static get topMenu(){
        return{
            get home(){
                return cy.contains('a','Home');
            },
            get contact(){
                return cy.contains('a','Contact');
            },
            get aboutUs(){
                return cy.contains('a','About Us')
            },
            get cart(){
                return cy.contains('a','Cart')
            },
            get logIn(){
                return cy.contains('a','Log in')
            },
            get singUp(){
                return cy.contains('a','Sign up')
            }
        }
    }
}