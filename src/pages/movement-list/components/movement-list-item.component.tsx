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

            <span className={classes.dataCell}></span>
        </div>
    )

}