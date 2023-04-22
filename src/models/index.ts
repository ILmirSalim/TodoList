export interface Group {
    id?: number;
    name: string;
    tasks: Task[];
    color: string;
    users?: string[]
  }

export interface Task {
    id: number;
    text: string;
    deadline: string;
    completed: boolean;
    inProcess: boolean;
}
  