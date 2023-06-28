describe("Auth", function() {
   it ("Log in", function(){
    cy.visit("http://localhost:80/master");
    cy.location("pathname").should("equal", "/login")
    cy.get("input[type='number']").type("1024")
    cy.contains("Log in").click()
    cy.contains(" New event ").should("be.visible")
   });

// wrong login to master

   it ("wrong login to master", function(){
      cy.visit("http://localhost:80/master");
      cy.location("pathname").should("equal", "/login")
      cy.get("input[type='number']").type("5555")
      cy.contains("Log in").click()
      cy.contains(" Incorrect code ").should("be.visible")
   });

   it ("wrong login to master2", function(){
      cy.visit("http://localhost:80/master");
      cy.location("pathname").should("equal", "/login")
      cy.get("input[type='number']").type("absd")
      cy.contains("Log in").click()
      cy.contains("Code is required").should("be.visible")
   });   
}); 
