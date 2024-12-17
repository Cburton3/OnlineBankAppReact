export const routesPrefixes = {
  accountList: "/account-list",
  transfer: "/transfer",
  movements: "/movement/:id"
};

export const appRoutes = {
  root: "/",
  accountList: routesPrefixes.accountList,
  editAccount: "/edit-account/:id",
  movements: routesPrefixes.movements,
  transfer: routesPrefixes.transfer,
  transferFromAccount: `${routesPrefixes.transfer}/:id`
};

//why if i change it to /movement/:AcountId can i not access teh other accounts? i think it has to correspond to how it is in routes or it gets confused with account-list
