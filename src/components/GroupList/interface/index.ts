import { Group } from "../../../interfaces/Group";

export interface GroupListProps {
    groupsData: Group[];
    handleDeleteGroup: (id: number) => void;
}