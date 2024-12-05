import { createSlice } from "@reduxjs/toolkit";
import gamingSession from "../service/gamingSession";

const gamingSessionsSlice = createSlice({
    name: "gamingSessions",
    initialState: [],
    reducers: {
        setGamingSessions: (state, action) => {
            return action.payload;
        },
        addGamingSession: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const { setGamingSessions, addGamingSession } = gamingSessionsSlice.actions;

export default gamingSessionsSlice.reducer;

export const getAllGamingSessions = () => async dispatch => {
    const param = {
        rows: 16,
        page: 1
    };

    const res = await gamingSession.getAllGamingSessions(param)

    dispatch(setGamingSessions(res))
}