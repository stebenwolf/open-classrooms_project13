/* import { combineReducers, createStore } from 'redux'; */
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import loginErrorReducer from '../features/loginErrorSlice';
import userInfosReducer from '../features/userInfos/userInfosSlice';
import accountsReducer from '../features/accounts/accountsSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        loginError: loginErrorReducer,
        userInfos: userInfosReducer,
        accounts: accountsReducer
    }
})