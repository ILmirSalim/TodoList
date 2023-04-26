import { Group } from "../../../../interfaces/Group";

export interface IDeleteTask {
    taskId: number,
    setGroup: (currentGroup: Group) => void,
    groupId: string | undefined,
    getItemInLS: () => Group[] | null,
    setItemInLS: (data: Group[]) => void
}

