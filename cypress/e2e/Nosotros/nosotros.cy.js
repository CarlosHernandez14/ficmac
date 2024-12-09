//Visitar nosotros
describe("Visitar nosotros", () => {
  it("Visitar nosotros", () => {
    cy.login();
    cy.visit("http://localhost:3000/Usuarios/Home");
    cy.contains("Nosotros").click();
  });
});

//Visitar nosotros y dar click en Misión
describe("Visitar nosotros y dar click en Misión", () => {
  it("Visitar nosotros y dar click en Misión", () => {
    cy.login();
    cy.visit("http://localhost:3000/Usuarios/Home");
    cy.contains("Nosotros").click();
    cy.contains("Misión").click();
  });
});

//Visitar nosotros y dar click en Visión
describe("Visitar nosotros y dar click en Visión", () => {
  it("Visitar nosotros y dar click en Visión", () => {
    cy.login();
    cy.visit("http://localhost:3000/Usuarios/Home");
    cy.contains("Nosotros").click();
    cy.contains("Visión").click();
  });
});

//Visitar nosotros y dar click en Valores
describe("Visitar nosotros y dar click en Valores", () => {
  it("Visitar nosotros y dar click en Valores", () => {
    cy.login();
    cy.visit("http://localhost:3000/Usuarios/Home");
    cy.contains("Nosotros").click();
    cy.contains("Valores").click();
  });
});