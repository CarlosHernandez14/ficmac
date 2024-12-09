//Abrir estudios
describe("Abrir estudios", () => {
  it("Abrir estudios", () => {
    cy.login();
    cy.visit("http://localhost:3000/Usuarios/Home");
    cy.contains("Estudios").click();
    cy.visit("http://localhost:3000/Usuarios/FormularioSolicitarEstudios");
  });
});