export class JobDescriptionPage {
  constructor() {}

  // selectors

  getJobHeader = () => cy.get("header h1");
  getJobOverview = () => cy.get(".ce-bodytext > p").eq(0);

  getJobSectionHeader = () => cy.get(".ce-bodytext h2");
  getJobSectionDescription = () => cy.get(".ce-bodytext > ul");

  getCompanyHeader = () =>
    cy.get(".ce-bodytext.table-responsive p strong").eq(0);
  getCompanyOverview = () =>
    cy.get(".ce-bodytext.table-responsive p strong").eq(1);

  getApplyBtn = () => cy.get(".ce-bodytext .action-1.btn");

  // methods

  checkJobContentNotEmpty(keyword: string) {
    this.getJobHeader()
      .should("not.be.empty")
      .contains(keyword, { matchCase: false });

    this.getJobOverview().should("not.be.empty");

    // check each job section header and description
    this.getJobSectionHeader().each(($element) => {
      cy.wrap($element).should("not.be.empty");
    });
    this.getJobSectionDescription().each(($element) => {
      cy.wrap($element).should("not.be.empty");
    });

    this.getCompanyHeader().should("not.be.empty");
    this.getCompanyOverview().should("not.be.empty");

    this.getApplyBtn().scrollIntoView().should("be.visible");
  }
}
