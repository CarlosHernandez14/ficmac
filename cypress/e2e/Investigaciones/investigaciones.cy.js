//Visitar investigacion y usar el buscador
describe("Visitar investigacion en educacion", () => {
  it("Visitar investigacion en educacion", () => {
    cy.login();
    cy.visit("http://localhost:3000/Usuarios/Home");
    cy.contains("Educación").click();
    cy.contains("Investigaciones").click();
    cy.get('input[placeholder="Buscar"]').type("Investigaci");

    cy.contains("Investigación sobre tratamiento de cáncer").click();
  });
});

//Visitar investigacion y usar el filtrador
describe("Visitar investigacion en educacion", () => {
  it("Visitar investigacion en educacion", () => {
    cy.login();
    cy.visit("http://localhost:3000/Usuarios/Home");
    cy.contains("Educación").click();
    cy.contains("Investigaciones").click();
    cy.get("select").select("Cáncer de pulmón");
  });
});
