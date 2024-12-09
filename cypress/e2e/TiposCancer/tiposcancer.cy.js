//Visitar tipos de cancer y usar el buscador
describe("Visitar investigacion en educacion", () => {
    it("Visitar investigacion en educacion", () => {
      cy.login();
      cy.visit("http://localhost:3000/Usuarios/Home");
      cy.contains("Educación").click();
      cy.contains("Tipos de cáncer").click();
      cy.contains("Cáncer de Mama").click();
    });
  });

  