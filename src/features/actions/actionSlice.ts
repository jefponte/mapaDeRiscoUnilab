import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Action } from "../../types/Action";



const eventSlice = createSlice({
    name: "actions",
    initialState: [],
    reducers: {
        getActions(state, action) {
            return action.payload.actions;
        },
    }
});

export const { getActions } = eventSlice.actions;
export const selectActionById = (state: RootState, id: string | undefined) => {
    const action = state.actions.find((action: Action) => action.id === id);
    return action || {} as Action;
}

export const selectActions = (state: RootState) => state.actions;
export default eventSlice.reducer;