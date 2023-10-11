

import {Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/locators";
import allData from '../../data/data'
import 'cypress-file-upload';
import 'cypress-drag-drop';
import 'cypress-real-events/support';
Cypress.config('defaultCommandTimeout', 60000)
const locator = new locatorsPage();
const data = new allData();
/*===============================================
    Login  
=================================================*/
Given('User open demoblaze',()=> {
 cy.visit(data.demoURL);
 }); 
 When('Enter the user login credentials', () => {
   cy.xpath(locator.login).contains('Log in').click()
   cy.wait(data.oneSecond );
   cy.xpath(locator.userName).type("admin") 
   cy.xpath(locator.password).type("admin") 
});
When('Click The Login Button',  ()=> {
   cy.xpath(locator.login_button).click()
   cy.wait(data.twoSecond)
})


/*===============================================
   Add to cart
=================================================*/
Then("Verify the Product CATEGORISE", ()=> {
  cy.xpath(locator.verify_CATEGORIES).should("have.text", "CATEGORIES")
  cy.xpath(data.twoSecond)
})

Then("Click on the Laptop button", ()=> {
  cy.xpath(locator.laptop).click()
  cy.xpath(data.twoSecond)
  cy.xpath(locator.Sony_vaio_i5).click()
  cy.xpath(data.twoSecond)
})

Then("Verify the Product Sony vaio i5", ()=> {
  cy.xpath(locator.verify_Sony_vaio_i5).should("have.text", "Sony vaio i5")
  cy.xpath(locator.verify_prize).should("have.text", "$790 *includes tax")
  cy.xpath(data.twoSecond)

})

Then("Click on the Add to cart", ()=> {
  cy.wait(data.threeSecond)
  cy.xpath(locator.add_to_cart).click()
  cy.xpath(data.twoSecond)
})

Then("Verify the product Cart list", ()=> {
  cy.xpath(locator.verify_cart_list).click()
  cy.xpath(data.threeSecond)
})
/*===============================================
   make a purchase order
=================================================*/

Then("Click on the Place Order", ()=> {
  cy.xpath(locator.place_order).click()
  cy.xpath(data.twoSecond)
  cy.xpath(locator.user_name).type("MASUD")
  cy.xpath(locator.user_country).type("Bangladesh")
  cy.xpath(locator.user_city).type("Dhaka")
  cy.xpath(locator.user_credit_card).type("123456789")
  cy.xpath(locator.user_month).type("September")
  cy.xpath(locator.user_year).type("2023")
  cy.xpath(locator.purchase).click()

})

Then("Verify the Order Purchase successfully", ()=> {
  cy.xpath(locator.Order_Purchase_successfully_popup).should("have.text", "Thank you for your purchase!")
  cy.wait(data.oneSecond)
  cy.xpath(locator.ok_popup).click()
  cy.wait(data.oneSecond)
})
/*===============================================
   Delete from cart
=================================================*/

Then("delete product from cart list", ()=>{
  cy.xpath(locator.delete_from_cart).click()
  cy.xpath(data.twoSecond)
})

/*===============================================
   Create a contact
=================================================*/

Then("Click on Contact buttion", ()=> {
  cy.xpath(locator.contact).click()
  cy.xpath(data.twoSecond)
  cy.xpath(locator.contact_email).type("abc@gmail.com")
  cy.xpath(locator.contact_name).type("masud")
  cy.xpath(locator.contact_message).type("hello")
  cy.xpath(locator.send_message).click()
  cy.xpath(data.twoSecond)
})

Then("verify that welcome admin are present", ()=> {
  cy.xpath(locator.welcome_admin_popup).should("have.text", "Welcome admin")
  cy.xpath(data.fiveSecond)
})












