import { Group } from "../../../../interfaces/Group";

export interface IGetCurGroup {
    groupId: string | undefined,
    getItemInLS: () => Group[] | null,
}
