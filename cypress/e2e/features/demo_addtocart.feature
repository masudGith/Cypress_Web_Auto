Feature: Automate demoblze

Background: open demoblze & login
    Given User open demoblaze
    When Enter the user login credentials
        | email             |  | password |
        | admin             |  | admin    |
    And Click The Login Button
   
   Scenario: Checking Add to cart is ok
       And Verify the Product CATEGORISE
       And Click on the Laptop button
       And Verify the Product Sony vaio i5
       And Click on the Add to cart
       And Verify the product Cart list
    Scenario: To make a purchase order
        And Click on the Laptop button
        And Verify the Product Sony vaio i5
        And Click on the Add to cart
        And Verify the product Cart list
        And Click on the Place Order
        And Verify the Order Purchase successfully  
     
    Scenario: checking delete to cart 
        And Click on the Laptop button
        And Verify the Product Sony vaio i5
        And Click on the Add to cart
        And Verify the product Cart list
        And delete product from cart list

    Scenario: create a contact by sending message
        And Click on Contact buttion

    Scenario: verify that welcome admin are present
        

        
