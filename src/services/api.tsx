import axios from "axios";


export const api = axios.create({
    baseURL: 'https://docs.google.com/spreadsheets/d/e/'
});

export const fetchData = async (setData: any) => {
    try {
        const response = await api.get('');
        const events = tsvToJSON(response.data);
        setData(events);
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
};

export const gettingTasks = async () => {
    try {
        const response = await api.get("2PACX-1vTDX4Iiart_C_hlcFQeBl-GyGMInu9s7wr24yETCoJkStH5ZPlUOrfQw2yTw6Zv9vBNCbw2jKIElCDv/pub?gid=0&single=true&output=tsv");
        return tsvToJSON(response.data);
    } catch (error) {
        console.log(error);
    }
};


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