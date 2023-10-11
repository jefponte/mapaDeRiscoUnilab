import axios from "axios";
import { Action, Monitoring } from "../types/Action";


export const api = axios.create({
    baseURL: 'https://docs.google.com/spreadsheets/d/e/'
});


export const gettingTasks = async () => {
    try {
        const response = await api.get("2PACX-1vTDX4Iiart_C_hlcFQeBl-GyGMInu9s7wr24yETCoJkStH5ZPlUOrfQw2yTw6Zv9vBNCbw2jKIElCDv/pub?gid=0&single=true&output=tsv");
        return tsvToJSON(response.data);
    } catch (error) {
        console.log(error);
    }
};

export const gettingActions = async () => {
    try {
        const responseActions = await api.get("2PACX-1vSWaQa27tPSvE6jVw2uEcVS7IItEZtTAtVetWPWMVVbZcyCPfhOls-K1JbK7p6LfTL6d1lAphhWZFMi/pub?gid=0&single=true&output=tsv");
        const responseMonitoring = await api.get("2PACX-1vSWaQa27tPSvE6jVw2uEcVS7IItEZtTAtVetWPWMVVbZcyCPfhOls-K1JbK7p6LfTL6d1lAphhWZFMi/pub?gid=1491401640&single=true&output=tsv");
        const actions = tsvToJSON<Action>(responseActions.data);
        const monitoring = tsvToJSON<Monitoring>(responseMonitoring.data);
        actions.map((action) => {
            action.monitoring = [];
            return action;
        });
        actions.map((action) => {
            monitoring.map((element) => {
                if(element.action_id === action.id) {
                    action.monitoring.push(element);
                }
            });
            return action;

        });
        return actions;
    } catch (error) {
        console.log(error);
    }
};
function tsvToJSON<T>(tsv: string): T[] {
    const lines = tsv.split('\r\n');
    const result: T[] = [];
    if (lines.length < 2) {
        return result;
    }
    const headers = lines[0].split('\t');
    for (let i = 1; i < lines.length; i++) {
        if (!lines[i]) {
            continue;
        }
        const currentline = lines[i].split('\t');
        const obj: Record<string, string> = {};
        for (let j = 0; j < headers.length; j++) {
            if (j < currentline.length) {
                obj[headers[j]] = currentline[j];
            }
        }
        result.push(obj as T);
    }
    return result;
}