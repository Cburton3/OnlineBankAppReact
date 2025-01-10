import React from "react";
import { MovementVm } from "../movement-list.vm";
import classes from './movement-list-item.components.module.css';

interface Props {
    movementItem : MovementVm;
};

export const MovementListItemComponent: React.FC<Props> = (props) => {
    const {movementItem} = props;

    return (
        <div className={classes.row}>

            <span className={classes.dataCell}>
                {new Date(movementItem.transaction).toLocaleDateString()}
                {/* unlike in accounts, these are NOT date objects but strings. WE did not change it into a date obj in the mapper */}
            </span>
            <span className={classes.dataCell}>
                {new Date (movementItem.realTransaction).toLocaleDateString()}
            </span>
            <span className={classes.dataCell}>
                {movementItem.description}
            </span>
            <span className={`${classes.dataCell} ${classes.alignRight} ${movementItem.amount > 0 ? '' : classes.red}`}>
                {movementItem.amount} €
            </span>
            <span className={`${classes.dataCell} ${classes.alignRight}`}>
                {movementItem.balance} €
            </span>
        </div>
    )

}