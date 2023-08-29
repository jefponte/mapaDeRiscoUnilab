import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";


export const api = axios.create({
    baseURL: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTDX4Iiart_C_hlcFQeBl-GyGMInu9s7wr24yETCoJkStH5ZPlUOrfQw2yTw6Zv9vBNCbw2jKIElCDv/pub?gid=0&single=true&output=tsv'
});

function tsvToJSON(tsv: string) {
    const lines = tsv.split('\r\n');
    const result: Record<string, string>[] = [];
    const headers = lines[0].split('\t');
    for (let i = 1; i < lines.length; i++) {
        if (!lines[i]) {
            continue;
        }
        const obj: Record<string, string> = {};
        const currentline = lines[i].split('\t');
        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
    return result;
}


export interface Event {
    id: string,
    area: string,
    process: string;
}


const response = await api.get('');
const events = tsvToJSON(response.data);


const eventSlice = createSlice({
    name: "events",
    initialState: events,
    reducers: {}
});



export const selectEvents = (state: RootState) => state.events;

export default eventSlice.reducer;