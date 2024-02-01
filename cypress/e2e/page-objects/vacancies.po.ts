export class VacanciesPage {
  constructor() {}

  // selectors

  getFilterByKeyword = () => cy.get("[data-qa='filter_keyword']");
  // get filtered vacancies without the "display: none;" attribute
  getFilteredVacancies = () =>
    cy.get(".filter-list-item:not([style*='display: none;'])");
  getFirstFilteredVacancy = () => this.getFilteredVacancies().eq(0).find("a");

  // methods

  filterJobsByKeyword(keyword: string) {
    this.getFilterByKeyword().scrollIntoView().type(keyword);
  }

  openFirstFilteredJobDescription(keyword: string) {
    this.getFirstFilteredVacancy()
      .scrollIntoView()
      .contains(keyword, { matchCase: false })
      .click();
  }
}
