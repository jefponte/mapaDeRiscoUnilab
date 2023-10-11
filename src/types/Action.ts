export interface Action {
    id:          string;
    type:        string | null;
    description: string | null;
    designated:  string | null;
    deadline:    string | null;
    monitoring: Monitoring[];
}
export interface Monitoring {
    action_id:       string;
    monitoring_note: string | null;
    process:        string | null;
    note_date:       string | null;
    status:         string | null;
    evidence:       string | null;
    observation:    string | null;
}
