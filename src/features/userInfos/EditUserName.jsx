// @ts-nocheck
import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { nameUpdated } from "./userInfosSlice";
import { editName } from "../userSlice";

import PostData from "../../services/services";

export const EditUserNameForm = () => {
    const userInfos = useSelector(state => state.userInfos);

    const [firstName, setFirstName] = useState(userInfos.firstName);
    const [lastName, setLastNAme] = useState(userInfos.lastName);

    const dispatch = useDispatch();

    const onFirstNameChanged = (e) => setFirstName(e.target.value);
    const onLastNameChanged = (e) => setLastNAme(e.target.value);

    const newUserName = {
        "firstName": firstName,
        "lastName": lastName
    }

    const onSaveNameClicked = async () => {
        if (firstName && lastName) {
            dispatch(nameUpdated({id: userInfos.id, firstName, lastName}));
            dispatch(editName(false));

            try {
                await PostData("UpdateUserName", newUserName);
            } catch (error) {
                console.error(error);
            }
        }
    }

    const onCancelClicked = () => {
        dispatch(editName(false));
    }

    return (
        <section>
            <form>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder={firstName}
                    value={firstName}
                    onChange={onFirstNameChanged}
                />
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder={lastName}
                    value={lastName}
                    onChange={onLastNameChanged}
                />
            </form>
            <button type="button" className="edit-button" onClick={onSaveNameClicked}>Save</button>
            <button type="reset" className="edit-button" onClick={onCancelClicked}>Cancel</button>
        </section>
    )
}