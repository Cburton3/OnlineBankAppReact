import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  AccountListPage,
  AccountPage,
  LoginPage,
  MovementListPage,
  TransferPage
} from "@/pages";
import { appRoutes } from "./routes";

export const Router = () => {
  return (
    //add create account route
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.root} element={<LoginPage />}></Route>
        <Route
          path={appRoutes.accountList}
          element={<AccountListPage />}
        ></Route>
        <Route path={appRoutes.editAccount} element={<AccountPage />}></Route>
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
      </Routes>
    </BrowserRouter>
  );
};
