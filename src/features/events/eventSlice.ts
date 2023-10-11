import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Event } from "../../types/Event";



const eventSlice = createSlice({
    name: "events",
    initialState: [],
    reducers: {
        getEvents(state, action) {
            return action.payload.events;
        },
    }
});

export const { getEvents } = eventSlice.actions;
export const selectEventById = (state: RootState, id: string | undefined) => {
    const event = state.events.find((event: Event) => event.id === id);
    return event || {} as Event;
}

export const selectEvents = (state: RootState) => state.events;
export default eventSlice.reducer;