//Visitar investigacion en educacion
describe("Visitar investigacion en educacion", () => {
  it("Visitar investigacion en educacion", () => {
    cy.login();
    cy.visit("http://localhost:3000/Usuarios/Home");
    cy.contains("Educación").click();
    cy.contains("Investigaciones").click();
  });
});

//Visitar tipos de cancer en educacion
describe("Visitar tipos de cancer en educacion", () => {
  it("Visitar tipos de cancer en educacion", () => {
    cy.login();
    cy.visit("http://localhost:3000/Usuarios/Home");
    cy.contains("Educación").click();
    cy.contains("Tipos de cáncer").click();
  });
});

//Visitar medicamentos en educación
describe("Visitar medicamentos en educación", () => {
  it("Visitar medicamentos en educación", () => {
    cy.login();
    cy.visit("http://localhost:3000/Usuarios/Home");
    cy.contains("Educación").click();
    cy.contains("Medicamentos").click();
  });
});