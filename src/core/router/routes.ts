export const routesPrefixes = {
  accountList: "/account-list",
  transfer: "/transfer",
  movements: "/movement/:id"
};

export const appRoutes = {
  root: "/",
  accountList: routesPrefixes.accountList,
  createAccount: "/create-account/:id",
  movements: routesPrefixes.movements,
  transfer: routesPrefixes.transfer,
  transferFromAccount: `${routesPrefixes.transfer}/:id`
};
