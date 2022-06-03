// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit'

export const userInfosSlice = createSlice({
    name: 'userInfos',
    initialState: {
        createdAt: null,
        email: null,
        firstName: null,
        lastName: null,
        id: null,
        updatedAt: null
    },
    reducers: {
        getUserInfos: (state, action) => {
            state.createdAt = action.payload.createdAt;
            state.email = action.payload.body.email;
            state.firstName = action.payload.body.firstName;
            state.lastName = action.payload.body.lastName;
            state.id = action.payload.body.id;
            state.updatedAt = action.payload.body.updatedAt;
        },
        getCreatedAt: (state, action) => {
            state.createdAt = action.payload
        },
        getEmail: (state, action) => {
            state.email = action.payload
        },
        getFirstName: (state, action) => {
            state.firstName = action.payload
        },
        getLastName: (state, action) => {
            state.lastName = action.payload
        },
        getId: (state, action) => {
            state.id = action.payload
        },
        getUpdatedAt: (state, action) => {
            state.updatedAt = action.payload
        },
        nameUpdated: (state, action) => {
            const { firstName, lastName } = action.payload;
            state.firstName = firstName;
            state.lastName = lastName;
        }
    }
});

export const { getUserInfos, getCreatedAt, getEmail, getFirstName, getLastName, getId, getUpdatedAt, nameUpdated } = userInfosSlice.actions;

export default userInfosSlice.reducer;