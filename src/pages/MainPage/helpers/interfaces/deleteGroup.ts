import { Dispatch, SetStateAction } from "react";
import { Group } from "../../../../interfaces/Group";

export interface IDeleteGroupProps {
    groupId: number,
    setGropsData: Dispatch<SetStateAction<Group[]>>,
    getItemInLS: () => Group[] | null,
    setItemInLS: (data: Group[]) => void
}