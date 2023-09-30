describe("Settings", () => {
  it("change language", () => {
    cy.viewport(1512, 769);

    cy.visit("http://localhost:8080/");

    cy.get(
      ".navbar > .container-fluid > #navbarSupportedContent > .dropdown > #dropdownMenuLink"
    ).click();

    cy.get(
      "#navbarSupportedContent > .dropdown > .dropdown-menu > .dropdown-item > .disable-decoration"
    ).click();

    cy.get(
      "#app > .wrap > .container > .card > .card-body > .form-control:nth-child(2)"
    ).click();

    cy.get(
      "#app > .wrap > .container > .card > .card-body > .form-control:nth-child(2)"
    ).type("root");

    cy.get(
      "#app > .wrap > .container > .card > .card-body > .form-control:nth-child(3)"
    ).type("Admin123");

    cy.get(".container > .card > .card-body > .d-flex > .btn").click();
    cy.get("#dropdownMenuLink").click();
    cy.get(".disable-decoration").click();
    cy.get("h1").should("contain.text", "Einstellungen");
    cy.get(":nth-child(2) > .form-select").select("en");
    cy.get("h1").should("contain.text", "Settings");
  });
  it("change theme", () => {
    cy.viewport(1512, 769);

    cy.visit("http://localhost:8080/");

    cy.get(
      ".navbar > .container-fluid > #navbarSupportedContent > .dropdown > #dropdownMenuLink"
    ).click();

    cy.get(
      "#navbarSupportedContent > .dropdown > .dropdown-menu > .dropdown-item > .disable-decoration"
    ).click();

    cy.get(
      "#app > .wrap > .container > .card > .card-body > .form-control:nth-child(2)"
    ).click();

    cy.get(
      "#app > .wrap > .container > .card > .card-body > .form-control:nth-child(2)"
    ).type("root");

    cy.get(
      "#app > .wrap > .container > .card > .card-body > .form-control:nth-child(3)"
    ).type("Admin123");

    cy.get(".container > .card > .card-body > .d-flex > .btn").click();
    cy.get("#dropdownMenuLink").click();
    cy.get(".disable-decoration").click();
    cy.get("body").should("have.css", "background-color", "rgb(255, 255, 255)");
    cy.get(":nth-child(4) > .form-select").select("dark-theme");
    cy.get("body").should("have.css", "background-color", "rgb(22, 22, 22)");
  });
});
