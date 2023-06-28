describe("AuthAdmin", function () {
   it("Login as Admin", function () {
      cy.loginAsAdmin("99999")
      cy.contains(" New master ").should("be.visible")
   });

   //Create Master
   it("Create Master", function () {
      cy.loginAsAdmin("99999")
      cy.contains(" New master ").should("be.visible")
      cy.contains(" New master ").click()
      cy.get("input[id='input-81']").type("Alena1294")
      const code = new Date().getTime().toString().slice(-6)
      cy.get("input[id='input-84']").type(code)
      cy.contains("Save").click()
      cy.contains("Logout").click()
      cy.location("pathname").should("equal", "/login")
      cy.get("input[type='number']").type(code)
      cy.contains("Log in").click()
      cy.contains(" New event ").should("be.visible")
   });
});