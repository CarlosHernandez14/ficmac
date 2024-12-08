//Abrir login
describe("Abrir login", () => {
  //Ingresar al login
  it("Ingresar al login", () => {
    cy.visit("http://localhost:3000/auth/login");
    cy.contains("Iniciar sesión");
  });
});

//Login incorrecto
describe("Login incorrecto", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/auth/login");
  });

  //Hacer click en el boton de login con campos vacios
  it("Hacer click en login con campos vacios", () => {
    cy.contains("button", "Iniciar Sesión").click();
    cy.contains("El correo o teléfono es Incorrecto").should("be.visible");
    cy.contains("La contraseña es incorrecta").should("be.visible");
  });

  //Ingresar solamente el correo
  it("Ingresar solamente el correo", () => {
    cy.get('input[id="username"]').type("example@example.com");
    cy.contains("button", "Iniciar Sesión").click();
    cy.contains("La contraseña es incorrecta").should("be.visible");
  });

  //Ingresar solamente la contraseña
  it("Ingresar solamente la contraseña", () => {
    cy.get('input[id="password"]').type("123456");
    cy.contains("button", "Iniciar Sesión").click();
    cy.contains("El correo o teléfono es Incorrecto").should("be.visible");
  });

  //Ingresar credenciales correctas
  it("Ingresar credenciales incorrectas", () => {
    cy.get('input[id="username"]').type("example@example.com");
    cy.get('input[id="password"]').type("123456");
    cy.contains("button", "Iniciar Sesión").click();
    cy.contains("Correo o contraseña incorrectos").should("be.visible");
    cy.url().should("include", "/auth/login");
  });
});

//Login correcto
describe("Login correcto", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/auth/login");
  });

  //Ingresar credenciales correctas
  it("Ingresar credenciales correctas", () => {
    cy.get('input[id="username"]').type("aguimtz.2003@gmail.com");
    cy.get('input[id="password"]').type("123456");
    cy.contains("button", "Iniciar Sesión").click();
    cy.url().should("include", "Usuarios/Home");
  });
});

//Recuperar contraseña
describe("Recuperar contraseña", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/auth/login");
  });

  //Hacer click en el boton de recuperar contraseña
  it("Hacer click en el boton de recuperar contraseña", () => {
    cy.contains("button", "¿Olvidaste tu contraseña?").click();
    cy.url().should("include", "/auth/forgot-password");
  });
});


describe("Ir a registrarse", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/auth/login");
  });

  //Hacer click en el boton de registrarse
  it("Hacer click en el boton de registrarse", () => {
    cy.contains("button", "Registrate").click();
    cy.contains("Registrate").should("be.visible");
  });
});
