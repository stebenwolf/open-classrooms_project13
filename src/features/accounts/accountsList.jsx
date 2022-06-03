// @ts-nocheck
import React from "react";
import { useSelector } from "react-redux";

export const AccountsList = () => {
    const accounts = useSelector(state => state.accounts);

    const renderedAccounts = accounts.map(account => (
        <section className="account" key={account.id}>
            <div className="account-content-wrapper" >
                <h3 className="account-title">{account.title}</h3>
                <p className="account-amount">{account.amount}</p>
                <p className="account-amount-description">{account.description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    ));

    return (
        <section className="accounts">
            <h2 className="sr-only">Accounts</h2>
            {renderedAccounts}
        </section>
    )
}