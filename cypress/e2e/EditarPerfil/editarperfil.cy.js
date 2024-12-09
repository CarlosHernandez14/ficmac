//Entrar a editar perfil, cambiar nombre y apellido y guardar
describe("Editar perfil", () => {
  it("Editar perfil", () => {
    cy.login();
    cy.visit("http://localhost:3000/Usuarios/Home");
    cy.get('button[data-testid="buttonUser"]').click();
    cy.contains("Editar perfil").click();
    cy.get('input[name="nombre"]').clear().type("Prueba");
    cy.get('input[name="apellido"]').clear().type("Prueba");
    cy.contains("Guardar").click();
  });
});
