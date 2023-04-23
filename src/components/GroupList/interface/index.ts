import { Group } from "../../../interfaces";

export interface GroupListProps {
    groupsData: Group[];
    handleDeleteGroup: (id: number) => void;
}