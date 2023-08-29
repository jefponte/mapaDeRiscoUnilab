import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface Event {
    id: string,
    area: string,
    process: string;
}

const event = {
    "id": "3",
    "area": "Ouvidoria",
    "process": "Manifestações de Ouvidoria"
}


export const initialState = [event,
    { ...event, id: "4" },
    { ...event, id: "5" },
    { ...event, id: "6" }];

const eventSlice = createSlice({
    name: "events",
    initialState: initialState,
    reducers: {}
});

export const selectEvents = (state: RootState) => state.events;

export default eventSlice.reducer;