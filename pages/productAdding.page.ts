const { I } = inject();

export = {
  productAdd: {
    catalog: {
      xpath: '//nav[@class="mt-2"]/ul/li/a/p[contains(text(),"Catalog")]',
    },
    product: {
      xpath: '//a[@href="/Admin/Product/List"]/p[contains(text(),"Products")]',
    },
    addNew: { xpath: '//a[@class="btn btn-primary"]' },
    productName: { xpath: '//input[@name="Name"]' },
    categories: { xpath: '//div[@class="k-multiselect-wrap k-floatwrap"]' },
    saveBtn: {
      xpath: '//div[@class="content-header clearfix"]/div/button[@name="save"]',
    },
    message: { xpath: '//div[@class="content-wrapper"]/div/button' },
  },

  catalog() {
    I.waitForElement(this.productAdd.catalog,30);
    I.click(this.productAdd.catalog);
    I.waitForElement(this.productAdd.product,20)
    I.click(this.productAdd.product);
  },

  addNew() {
    I.click(this.addNew);
  },

  async ProductForm() {
    I.fillField(this.productName);
    I.click(this.categories);
    const list= await I.grabTextFromAll('//ul[@id="SelectedCategoryIds_listbox"]/li')

    for(let i=1; i<list.length;i++)
    {
       if(list[i]=='Computers >> Notebooks')
       {
         console.log(list[i]);
         I.click(`//ul[@id='SelectedCategoryIds_listbox']/li[contains(text(),'${list[i]}')]`)

       }
    }

    I.click(this.saveBtn);
  },

  async SuccessMessage() {
   const success=await I.grabTextFromAll(this.productAdd.message);
    console.log();
    let assert=require('assert')
    await assert.equal("",success)
  },
};
