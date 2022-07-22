import { Property } from "./property";

export interface Model {
    id: string | null;
    helpText: string | null;
    label: string | null;
    name: string | null;
    properties: Property[];
}