import { appRoutes, routesPrefixes } from "@/core/router";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./navbar.component.module.css";

export const NavBarComponent: React.FC = () => {
  const { pathname } = useLocation(); //used to access the current location obj(url). Pathname in built, gives the path portion of the URL so 
  const defaultAccountId = "1";
  return (
    <nav className={classes.navbar}>
      <ul className={classes.list}>
        <li
          className={
            pathname.startsWith(routesPrefixes.accountList) //pathName is only the path portion of the URL so doesnt include the protocol https:// nor the domain example.com so if full URL were https://example.com/account-list then only gives /account-list
              ? classes.selected
              : ""
          }
        >
          <Link to={appRoutes.accountList}>My Accounts</Link> 
          {/* this just changes the URL but doesnt render/navigate anythng without the router.component
          its the Router that listens to URL changes and matches the new URL to one defined in <route> paths and then renders the element for that page. */}
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
