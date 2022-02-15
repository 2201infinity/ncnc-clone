export {};

describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("카테고리를 클릭했을 경우, 해당 카테고리로 이동한다", () => {
    cy.get("a").contains("땡철이").click();
    cy.url().should("include", "/categories/1");
  });

  it("햄버거 매뉴를 클릭했을 때, 사이드바가 나온다", () => {
    cy.get("svg").eq(0).click();
    cy.get("div").contains("마이페이지");
  });

  it("사이드바에는 고객센터 메뉴가 있다.", () => {
    cy.get("svg").eq(0).click();
    cy.get("a").contains("고객센터");
  });

  it("고객센터를 클릭하면 고객센터 페이지로 이동된다", () => {
    cy.get("svg").eq(0).click();
    cy.get("a").contains("고객센터").click();
    cy.url().should("include", "/contacts");
  });
});
