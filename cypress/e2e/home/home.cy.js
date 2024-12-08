//Abrir home
describe("Abrir home", () => {

//Ingresar credenciales correctas
it("Abrir home", () => {
    cy.login();
    cy.visit("http://localhost:3000/Usuarios/Home");
    cy.contains("Inicio");
  });
});