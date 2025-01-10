import * as React from "react";
import {
  HeaderComponent,
  NavBarComponent,
  FooterComponent
} from "./components";
import classes from './app-layout.module.css'

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props; //this is just how to do the layout

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <NavBarComponent />
      <main className={classes.mainContent}>{children}</main>
      <FooterComponent></FooterComponent>
    </>
  );
};
