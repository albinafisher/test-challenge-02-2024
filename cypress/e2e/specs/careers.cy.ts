import { CareersPage } from "../page-objects/careers.po";
import { HomePage } from "../page-objects/homepage.po";
import { JobDescriptionPage } from "../page-objects/job-description.po";
import { VacanciesPage } from "../page-objects/vacancies.po";

describe("Careers tests: ", () => {
  const homepage = new HomePage();
  const careerspage = new CareersPage();
  const vacanciesPage = new VacanciesPage();
  const jobDescriptionPage = new JobDescriptionPage();
  const url = "https://www.aoe.com";
  const jobFilterByKeyword = "frontend";

  beforeEach(() => {
    cy.visit(url);
  });

  it("should display the job offer content with all the details", () => {
    homepage.acceptCookies();
    homepage.clickCareersSectionBtn();
    careerspage.clickGetAllVacanciesBtn();
    vacanciesPage.filterJobsByKeyword(jobFilterByKeyword);
    vacanciesPage.openFirstFilteredJobDescription(jobFilterByKeyword);
    jobDescriptionPage.checkJobContentNotEmpty(jobFilterByKeyword);
  });
});
