import React, { FC } from "react";
import { Link } from 'react-router-dom';
import { Group } from "../../models";
import { Button } from "../ui-components/Button";
import './style.css'
interface GroupListProps {
    groupsData: Group[];
    handleDeleteGroup: (id: number) => void;
}
export const GroupList: FC<GroupListProps> = ({ groupsData, handleDeleteGroup }) => {
    const hasGroup = groupsData && groupsData.length > 0;
    return (
        <div>
            <h1 className='titleMain'>Task groups:</h1>
            {hasGroup && groupsData.map(group => (<div key={group.id}>
                <Link className='linkMain' key={group.id} to={`/group/${group.id}`}>
                    <div className='elemMain' style={{ backgroundColor: group.color }}>{group.name}</div>
                </Link>
                <Button onClick={() => handleDeleteGroup(group.id!)}>Delete group</Button>
            </div>
            ))}
            {
                !hasGroup && <div>Add a group......</div>
            }
        </div>
    )
}