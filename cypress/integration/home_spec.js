export {};

describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("카테고리를 클릭했을 경우, 해당 카테고리로 이동한다", () => {
    cy.get("a").contains("땡철이").click();
    cy.url().should("include", "/categories/1");
  });
});
