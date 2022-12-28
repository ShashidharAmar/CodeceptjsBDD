const { productAdding } = inject();

Then("Click on catelog and select product",async () => {
  productAdding.catalog();
});

Then("Click on addNew and select product info",async () => {
  productAdding.addNew();
});

Then("Fill the mondatory fields and click on save",async () => {
  productAdding.ProductForm();
});

Then("Guess the Sccessfulmessage",async () => {
  productAdding.SuccessMessage();
});
