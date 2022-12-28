const { addCustomer } = inject();

When("Click on customer and select customer", async () => {
  addCustomer.selectCust();
});

Then("Click on Add new", async () => {
  addCustomer.newBtn();
});

Then("Fill the form and click on save button", async () => {
  addCustomer.saveBtn();
});

When("Check the Sccessful message", async () => {
  addCustomer.title();
});
