import { CartMethods } from "./pages/cart/cart.methods";
import { LoginMethods } from "./pages/login/login.methods";

describe('template spec', () => {
  it('passes', () => {
    const usuario = 'random01';
    const contrasena = 'random01'
    cy.visit('https://www.demoblaze.com/index.html')
    cy.wait(30000)
    CartMethods.clickOnDeleteLink('Nokia lumia 1520')
    cy.wait(30000)
  })
})