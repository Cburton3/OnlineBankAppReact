import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  AccountListPage,
  CreateAccountPage,
  LoginPage,
  MovementListPage,
  TransferPage
} from "@/pages";
import { appRoutes } from "./routes";

//without this page, whenever the URL changes, no rendering/ navigation would happen
export const Router = () => {
  return (
    //add create account route
    <BrowserRouter> 
    {
    /* Wraps the entire app and enables routing using the browser's history API
    It listens to changes in the URL and maps the path to a corresponding route
     */}
      <Routes>
        {/* just a container */}
        <Route path={appRoutes.root} element={<LoginPage />}></Route>
        {/* each route maps a path to an element. it tells the app (router is in app.root) that when the URL is /login, render AccountListPage 
        so the URL is the path and the element is where youa re navigated to*/}
        <Route
          path={appRoutes.accountList}
          element={<AccountListPage />}
        ></Route>
        <Route path={appRoutes.createAccount} element={<CreateAccountPage />}></Route>
        <Route
          path={appRoutes.movements}
          element={<MovementListPage />}
        ></Route>
        <Route path={appRoutes.transfer} element={<TransferPage />}></Route>
        <Route
          path={appRoutes.transferFromAccount}
          element={<TransferPage />}
          ></Route>
        <Route path="*" element={<Navigate to="/account-list" replace />} /> 
          {/* this means the default path to go to account-list and this would be the URL too as the router checks the url which is here manually  set to .account-list and then matches and renders the correct component*/}
      </Routes>
    </BrowserRouter>
  );
};
