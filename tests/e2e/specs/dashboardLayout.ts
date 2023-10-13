describe("Settings", () => {
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
    cy.get(":nth-child(3) > .btn").click();
    cy.get(
      ":nth-child(1) > .card > .card-body > :nth-child(1) > .form-select"
    ).select("dateTime");
    cy.get(
      ":nth-child(6) > .card > .card-body > :nth-child(1) > .form-select"
    ).select("dateTime");
    cy.get(":nth-child(6) > .card > .card-body > :nth-child(2) > .form-control")
      .clear()
      .type(50);
    cy.get(":nth-child(3) > .nav-link").click();
    cy.get(
      '[style="position: absolute; top: 0%; left: 0%; width: 20%; height: 20%;"] > h1'
    ).should("exist");
    cy.get(
      '[style="position: absolute; top: 50%; left: 80%; transform: translateY(-50%); width: 20%; height: 50%;"] > h1'
    ).should("exist");
  });
});
