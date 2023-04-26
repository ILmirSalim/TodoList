import { Dispatch, SetStateAction } from "react";
import { Group } from "../../../../interfaces/Group";

export interface ICreateGroupProps {
    users: string[],
    setGropsData: Dispatch<SetStateAction<Group[]>>,
    groupsData: Group[],
    group: Group,
    getItemInLS: () => Group[] | null,
    setItemInLS: (data: Group[]) => void
}

