import React from "react"
import { Link } from 'react-router-dom';
import './style.css'

export const GroupList = ({ groupsData }) => {
    return (
        <div>
            <h1 className='titleMain'>Task groups:</h1>
            {groupsData && groupsData.length > 0 ? groupsData.map(group => (
                <Link className='linkMain' key={group.id} to={`/group/${group.id}`}>
                    <div className='elemMain' style={{ backgroundColor: group.color }}>{group.name}</div>
                </Link>
            )) : <div>Add a group......</div>}
        </div>
    )
}