import React from "react";
import { AccountVm } from "../account-list.vm";
import classes from './account-list-item.component.module.css'
import { generatePath, Link, useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";

const ACTION_NONE = '';
const ACTION_TRANSFER = '1';
const ACTION_MOVEMENTS = '2';

interface Props {
    accountItem : AccountVm;
}

export const AccountListItemComponent: React.FC<Props> = (props) => {
    const {accountItem} = props;
    const navigate = useNavigate();

    const handleSelectedOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        //to find out the TYPE for 'e', on the select tag we made an onChange event for astring 'e => console.log('Greetings friend')' and then hover over e and it gives you the type (green part) then replace that with this fx's name
        switch(e.target.value) {
            case ACTION_TRANSFER:
                navigate(
                    generatePath(appRoutes.transferFromAccount, {id: accountItem.id})//re id is being passed as a prop from the table page into the list RC
                );
                break;
                case ACTION_MOVEMENTS:
                    navigate(generatePath(appRoutes.movements, {id: accountItem.id}));
                break;
                
        }
    }

//8:05
    return ( //this is how you get 2 classes for 1 html ele
        <div className={classes.row}> 

            <span className={`${classes.dataCell} ${classes.bold}`}><Link to={generatePath(appRoutes.movements, {id: accountItem.id})}>
            {accountItem.iban}
            </Link></span>

            <span className={classes.dataCell}>{accountItem.name}</span>
            
            <span className={`${classes.dataCell} ${classes.alignRight}`}>{accountItem.balance}</span>
            <span className={`${classes.dataCell} ${classes.alignRight}`}>{accountItem.lastTransaction.toLocaleDateString()}</span>
            {/* unlike in movement, here we already have a date object so only need toLocalestring(). It was turned into a date obj in the mapper */}

            <span className={`${classes.dataCell} ${classes.selectContainer}`}>
                <select className={classes.select}
                onChange={handleSelectedOptionChange}
                >
                    <option value={ACTION_NONE}>Select</option>
                    <option value={ACTION_TRANSFER}>Transfer</option>
                    <option value={ACTION_MOVEMENTS}>Movements</option>
                </select>
            </span>
            
        </div>
    )
}