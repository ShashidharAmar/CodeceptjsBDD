const { I } = inject();

export = {
  addCust: {
    addCustomer: { xpath: '//a[@href="#"]//p[contains(text(),"Customers")]' },
    subAddCustomer: {
      xpath:
        "//a[@href='/Admin/Customer/List']//p[contains(text(),'Customers')]",
    },
    addNewBtn: { xpath: "//a[@class='btn btn-primary']" },
    email: { xpath: "//input[@id='Email']" },
    firstName: { xpath: "//input[@id='FirstName']" },
    lastName: { xpath: "//input[@id='LastName']" },
    adharNumber: { xpath: '//input[@class="form-control"]' },
    saveBtn: { xpath: "//button[@name='save']" },
  },

  selectCust() {
    I.click(this.addCust.addCustomer), I.click(this.addCust.subAddCustomer);
  },
  newBtn() {
    I.click(this.addCust.addNewBtn);
  },

  saveBtn() {
    I.fillField(this.addCust.email,'Shashidhar@gmail.com'),
      I.fillField(this.addCust.firstName,'Shashidhar'),
      I.fillField(this.addCust.lastName,'Amarannavar'),
    // I.fillField(this.addCust.adharNumber)
    I.click(this.addCust.saveBtn)
  },
  async title() {
    const title = await I.grabTitle()
    console.log(title);
  },
};
