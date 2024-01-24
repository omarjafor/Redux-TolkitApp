import { createSlice } from "@reduxjs/toolkit";
import { fakeUserData } from "../../Api/api";

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
        },
        removeUser(state, action) {
            state.splice(action.payload, 1);
        },
        updateUser(state, action) {
            state[action.payload] = fakeUserData();
        },
        deleteUsers() {
            return [];
        },
    },
});

export default userSlice.reducer;  
export const { addUser, removeUser, updateUser, deleteUsers } = userSlice.actions;