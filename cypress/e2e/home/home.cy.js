//Abrir home
describe("Abrir home", () => {

//Ingresar credenciales correctas
it("Abrir home", () => {
    cy.login();
    cy.visit("http://localhost:3000/Usuarios/Home");
    cy.contains("Inicio");
  });
});

//Dar click en saber más
describe("Dar click en saber más", () => {
  it("Dar click en saber más", () => {
    cy.login();
    cy.visit("http://localhost:3000/Usuarios/Home");
    cy.contains("Saber más").click();
  });
});

//Dar click en el botón de Conocer más
describe("Dar click en el botón de Conocer más", () => {
  it("Dar click en el botón de Conocer más", () => {
    cy.login();
    cy.visit("http://localhost:3000/Usuarios/Home");
    cy.contains("Conocer más").click();
  });
});