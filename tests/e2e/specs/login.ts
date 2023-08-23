describe("Auth tests", function () {
  it("Login", function () {
    cy.viewport(1512, 769);

    cy.visit("http://localhost:8080/");

    cy.get(
      ".navbar > .container-fluid > #navbarSupportedContent > .dropdown > #dropdownMenuLink"
    ).click();

    cy.get(
      "#navbarSupportedContent > .dropdown > .dropdown-menu > .dropdown-item > .disable-decoration"
    ).click();

    cy.get(
      "#app > .container > .card > .card-body > .form-control:nth-child(2)"
    ).click();

    cy.get(
      "#app > .container > .card > .card-body > .form-control:nth-child(2)"
    ).type("root");

    cy.get(
      "#app > .container > .card > .card-body > .form-control:nth-child(3)"
    ).type("Admin123");

    cy.get(".container > .card > .card-body > .d-flex > .btn").click();
    cy.get("h1").should("contain.text", "Dashboard");
  });
});
