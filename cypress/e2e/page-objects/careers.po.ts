export class CareersPage {
  constructor() {}

  // selectors

  getAllVacanciesBtn = () => cy.get("[data-qa='vacancies_highlights_btn_all']");

  // methods

  clickGetAllVacanciesBtn() {
    this.getAllVacanciesBtn().scrollIntoView().click();
  }
}
