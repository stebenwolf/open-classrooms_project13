// @ts-nocheck
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "./userSlice";

import { NavLink } from "react-router-dom";

import { decodeToken } from "react-jwt";

import PostData from "../services/services";
import { getUserInfos } from "./userInfosSlice";
import { logIn } from "./userSlice";

export const UserHeader = () => {

    const user = useSelector(state => state.user.loggedInUser);
    const userInfos = useSelector(state => state.userInfos);
    const dispatch = useDispatch();

    const isValidToken = decodeToken(localStorage.getItem("token"));
    const isComplete = Boolean(userInfos) && Boolean(isValidToken);

    useEffect(() => {
        const connect = async () => {
        if (isValidToken) {
            try {
              dispatch(logIn(user));
              const userInfos = await PostData("UserInfos", null);
              dispatch(getUserInfos(userInfos));
              
            } catch (error) {
              console.error(error);
            }
          }
        };
        connect();
    }, [isValidToken, dispatch, user]);

    return (
        <>
        {(isComplete) ? 
            (<div>
                <NavLink to="/user" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    &nbsp;{userInfos.firstName}
                </NavLink>&nbsp;
                
                <NavLink to="/" className="main-nav-item" onClick={() => {
                    localStorage.removeItem("token");
                    dispatch(logOut());
                }}>
                    <i className="fa fa-sign-out"></i>
                    &nbsp;Sign Out
                </NavLink>
            </div>)
        : (<div>
            <NavLink to="/sign-in" className="main-nav-item" /* href="./sign-in.html" */>
                <i className="fa fa-user-circle"></i>
                &nbsp;Sign In
            </NavLink>
        </div> )}
        
        </>
    )
}