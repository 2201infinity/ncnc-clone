describe("Categories Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("카테고리에서 땡철이를 누르면 해당 메뉴로 이동된다", () => {
    cy.get("a").contains("땡철이").click();
    cy.url().should("include", "/categories/1");
    cy.get("h2").contains("땡철이");
  });

  it("카테고리에서 다른 메뉴들을 누르면 해당 메뉴로 이동된다", () => {
    const list = [
      {
        id: 67,
        name: "카페",
      },
      {
        id: 62,
        name: "편의점,마트",
      },
      {
        id: 60,
        name: "빵,아이스크림",
      },
    ];
    list.forEach((item) => {
      cy.get("a").contains(item.name).click();
      cy.url().should("include", `/categories/${item.id}`);
      cy.get("h2").contains(item.name);
    });
  });
});
