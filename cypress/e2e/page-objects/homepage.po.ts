export class HomePage {
  constructor() {}

  // selectors

  getCookiesBanner = () => cy.get("[id='onetrust-group-container']");
  getAcceptCookiesBtn = () => cy.get("[id='onetrust-accept-btn-handler']");
  getCareersSectionBtn = () => cy.get("[data-qa='nav_main_6']");

  // methods

  // accept cookies only if the banner appears
  acceptCookies() {
    this.getCookiesBanner().then(($banner) => {
      if ($banner.is(":visible")) {
        this.getAcceptCookiesBtn().click();
      }
    });
  }

  clickCareersSectionBtn() {
    this.getCareersSectionBtn().click();
  }
}
