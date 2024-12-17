import { appRoutes, routesPrefixes } from "@/core/router";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./navbar.component.module.css";

export const NavBarComponent: React.FC = () => {
  const { pathname } = useLocation(); //used to access the current location obj(url). Pathname in built, gives the path portion of the URL
  const defaultAccountId = "1";
  return (
    <nav className={classes.navbar}>
      <ul className={classes.list}>
        <li
          className={
            pathname.startsWith(routesPrefixes.accountList)
              ? classes.selected
              : ""
          }
        >
          <Link to={appRoutes.accountList}>My Accounts</Link>
        </li>

        <li
          className={
            pathname.startsWith(routesPrefixes.movements) ||
            pathname.startsWith("/movement")
              ? classes.selected //un poco chapuza here
              : ""
          }
        >
          <Link to={`/movement/${defaultAccountId}`}>Movements</Link>
          {/* <Link to={appRoutes.movements}>Movements</Link> */}
        </li>

        <li
          className={
            pathname.startsWith(routesPrefixes.transfer) ? classes.selected : ""
          }
        >
          <Link to={appRoutes.transfer}>Transfers</Link>
        </li>
      </ul>
    </nav>
  );
};
