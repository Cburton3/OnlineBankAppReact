export const routesPrefixes = {
    accountList: '/account-list',
    transfer: '/transfer',
    movements: '/movement/:id' //need to make the id dynamic somewhere
};

export const appRoutes = {
    root: '/',
    accountList: routesPrefixes.accountList,
    editAccount: '/edit-account/:id',
    movements: routesPrefixes.movements,
    transfer: routesPrefixes.transfer,
    transferFromAccount: `${routesPrefixes.transfer}/:id`
};

//why if i change it to /movement/:AcountId can i not access teh other accounts?