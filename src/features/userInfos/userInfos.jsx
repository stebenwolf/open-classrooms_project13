// @ts-nocheck
import React from "react";
import { useSelector } from "react-redux";

export const UserInfos = ({type}) => {
    
    let infoType = null;
    switch (type) {
        case 'id':
            infoType = 'id';
            break;
        case 'email':
            infoType = 'email';
            break;
        default:
            console.error("Type inconnu");
    }

    const info = useSelector(state => state.userInfos.infoType);

    if (infoType === null) {
        return (
            <>
                <span>N/A - Loading...</span>
            </>
        )
    }

    return (
        <>
            <span>{info}</span>
        </>
    )

    
}