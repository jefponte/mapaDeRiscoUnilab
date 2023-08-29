import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Event {
    id: string,
    area: string,
    process: string;
}

const eventSlice = createSlice({
    name: "events",
    initialState: [],
    reducers: {}
});


export const selectEvents = (state: RootState) => state.events;

export default eventSlice.reducer;