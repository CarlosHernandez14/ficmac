//Visitar foro
describe("Visitar foro", () => {
  it("Visitar foro", () => {
    cy.login();
    cy.visit("http://localhost:3000/Usuarios/Home");
    cy.contains("Foro").click();
  });
});
