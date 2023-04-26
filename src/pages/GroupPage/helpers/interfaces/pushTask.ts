import { Group } from "../../../../interfaces/Group"

export interface IPushProps {
    newTaskText: string,
    newTaskDeadline: string,
    groupId: string | undefined,
    setGroup: (currentGroup: Group) => void,
    getItemInLS: () => Group[] | null,
    setItemInLS: (data: Group[]) => void
}
