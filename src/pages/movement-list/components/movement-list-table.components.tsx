import React from "react";
import { MovementVm } from "../movement-list.vm";
import classes from "./movement-list-table.components.module.css";
import { MovementListItemComponent } from "./movement-list-item.component";

interface Props {
  movementList: MovementVm[];
}

export const MovementListTableComponent: React.FC<Props> = (props) => {
  const { movementList } = props;

  return (
    <>
      <div className={classes.gridContainer}>
        <div className={classes.gridTable}>
          <div className={classes.headerTable}>
            <span className={classes.headerCell}>DATE</span>
            <span className={classes.headerCell}>LIQUIDATES</span>
            <span className={classes.headerCell}>DESCRIPTION</span>
            <span className={classes.headerCell}>AMOUNT</span>
            <span className={classes.headerCell}>CURRENT BALANCE</span>
          </div>

          {movementList.map((movement) => (
            <MovementListItemComponent
              key={movement.id}
              movementItem={movement}
            ></MovementListItemComponent>
          ))}
        </div>
      </div>
    </>
  );
};
