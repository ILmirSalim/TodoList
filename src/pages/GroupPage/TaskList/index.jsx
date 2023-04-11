import React from "react";
import { Button } from "../../../components/ui-components/Button";
import './style.css'

export const TaskList = ({ group, changeProcess, completeTask }) => {

    return (
        <div className='wrapperGroup' style={{ backgroundColor: group.color }}>
            <p className='textGroup'>Пользователи: {group.users && group.users.join(', ')}</p>
            <p className='textGroup'>Задачи: </p>
            {group.tasks && (
                <ul className='ulTask'>
                    {group.tasks.map((task) => (<div key={task.id} className='taskItem'>
                        <div className='taskText' key={task.id}>{task.text}</div>
                        {task.completed === false ?
                            <div className='deadline'>Срок выполнения до {task.deadline}</div> :
                            <div className='deadlineEnd'>Задача завершена</div>}
                        {task.inProcess === false & task.completed === false ? <Button onClick={() => changeProcess(task.id)}>Начать выполнение</Button> : null}
                        {task.inProcess === true & task.completed === false ? <div className=''>Задача выполняется</div> : null}
                        {task.completed === false && <Button onClick={() => completeTask(task.id)}>Завершить задачу</Button>}
                    </div>
                    ))}
                </ul>
            )}
        </div>
    )
}