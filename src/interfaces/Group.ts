import { Task } from "./Task";

export interface Group {
    id?: number;
    name: string;
    tasks: Task[];
    color: string;
    users?: string[]
  }
