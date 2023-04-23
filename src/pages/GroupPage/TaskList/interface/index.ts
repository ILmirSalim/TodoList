import { Group } from "../../../../interfaces";

export interface TaskListProps {
    group: Group;
    changeProcess: (id: number) => void;
    completeTask: (id: number) => void;
    taskDelete: (id: number) => void;
}