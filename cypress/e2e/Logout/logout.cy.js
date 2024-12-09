//Entrar a home, picar en boton con <FaUser /> y Cerrar sesión
describe("Logout", () => {
    it("Logout", () => {
        cy.login();
        cy.visit("http://localhost:3000/Usuarios/Home");
        cy.get('button[data-testid="buttonUser"]').click();
        cy.contains("Cerrar sesión").click();
    });
    });
