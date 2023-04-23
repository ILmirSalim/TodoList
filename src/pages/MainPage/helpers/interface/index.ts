import { Dispatch, SetStateAction } from "react";
import { Group } from "../../../../interfaces";

export interface ICreateGroupProps {
    users: string[],
    setGropsData: Dispatch<SetStateAction<Group[]>>,
    groupsData: Group[],
    group: Group,
    getItemInLS: () => Group[] | null,
    setItemInLS: (data: Group[]) => void
}

export interface IDeleteGroupProps {
    groupId: number,
    setGropsData: React.Dispatch<React.SetStateAction<Group[]>>,
    getItemInLS: () => Group[] | null,
    setItemInLS: (data: Group[]) => void
}