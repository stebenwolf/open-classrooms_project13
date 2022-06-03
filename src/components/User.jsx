// @ts-nocheck
import { useDispatch, useSelector } from "react-redux";

import { AccountsList } from '../features/accounts/accountsList';
import { EditUserNameForm } from "../features/userInfos/EditUserName";

import { Navigate } from "react-router-dom";

import { editName } from '../features/userSlice';

function User() {

  const userInfos = useSelector(state => state.userInfos);
  const isLoggedIn = useSelector(state => state.user.loggedInUser);
  const isEditing = useSelector(state => state.user.isEditing);

  const dispatch = useDispatch();

  const isEditingButton = (e) => {
    e.preventDefault();
    dispatch(editName(true));
  }

  if (!isLoggedIn) {
    return (
      <Navigate to="/" replace={true} ></Navigate>
    )
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br /><span className="userName">{userInfos.firstName} {userInfos.lastName}</span>!</h1>
        {isEditing ? <EditUserNameForm /> : (<button className="edit-button" onClick={isEditingButton}>Edit Name</button>)}
      </div>
      <AccountsList />
    </main>
    
  )
}

export default User;