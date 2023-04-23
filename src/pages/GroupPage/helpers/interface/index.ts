import { Group } from "../../../../interfaces";

export interface IGetCurGroup {
    groupId: string | undefined,
    getItemInLS: () => Group[] | null,
}

export interface IModifyProcessProps {
    groupId: string | undefined,
    taskId: number,
    setGroup: (currentGroup: Group) => void,
    getItemInLS: () => Group[] | null,
    setItemInLS: (data: Group[]) => void
}

export interface IPushProps {
    newTaskText: string,
    newTaskDeadline: string,
    groupId: string | undefined,
    setGroup: (currentGroup: Group) => void,
    getItemInLS: () => Group[] | null,
    setItemInLS: (data: Group[]) => void
}

export interface IFinishTaskProps {
    groupId: string | undefined,
    taskId: number,
    setGroup: (currentGroup: Group) => void,
    getItemInLS: () => Group[] | null,
    setItemInLS: (data: Group[]) => void
}
export interface IDeleteTask {
    taskId: number,
    setGroup: (currentGroup: Group) => void,
    groupId: string | undefined,
    getItemInLS: () => Group[] | null,
    setItemInLS: (data: Group[]) => void
}

