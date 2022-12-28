/// <reference types='codeceptjs' />


type ecommerceLogin = typeof import('./pages/ecommerceLogin.page');
type addCustomer = typeof import('./pages/addCustomer.page');
type productAdding = typeof import('./pages/productAdding.page');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any ,
                            ecommerceLogin:ecommerceLogin,
                            addCustomer:addCustomer,
                            productAdding:productAdding

  }
  interface Methods extends PlaywrightTs {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
