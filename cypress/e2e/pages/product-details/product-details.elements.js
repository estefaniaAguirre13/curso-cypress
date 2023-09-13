export class ProductDetailsElements {
    static get buttons(){
        return {
            get addTocart() {
                return cy.contains('a', 'Add to cart');
            }
        }
    }
}