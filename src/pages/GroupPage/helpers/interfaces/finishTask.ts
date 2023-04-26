import { Group } from "../../../../interfaces/Group"

export interface IFinishTaskProps {
    groupId: string | undefined,
    taskId: number,
    setGroup: (currentGroup: Group) => void,
    getItemInLS: () => Group[] | null,
    setItemInLS: (data: Group[]) => void
}