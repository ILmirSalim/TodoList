import React from "react";
import { Button } from "../../../components/ui-components/Button";
import { Group } from '../../../models/index';
import './style.css'

interface TaskListProps {
  group: Group;
  changeProcess: (id: number) => void;
  completeTask: (id: number) => void;
  taskDelete: (id: number) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ group, changeProcess, completeTask, taskDelete }) => {
  return (
    <div className='wrapperGroup' style={{ backgroundColor: group.color }}>
      <p className='textGroup'>Users: {group.users && group.users.join(', ')}</p>
      <p className='textGroup'>Tasks: </p>
      {group.tasks && (
        <ul className='ulTask'>
          {group.tasks.map((task) => (
            <div key={task.id} className='taskItem'>
              <div className='taskText' key={task.id}>
                {task.text}
              </div>
              {!task.completed ? (
                <div className='deadline'>Deadline{task.deadline}</div>
              ) : (<div className='deadlineEnd'>Task completed</div>)}

              {!task.inProcess && task.completed === false ? (
                <Button onClick={() => changeProcess(task.id)}>Start task</Button>) : null}

              {task.inProcess && task.completed === false ? (
                <div className='inProcess'>In the process... </div>) : null}

              {!task.completed && (
                <Button onClick={() => completeTask(task.id)}>Complete task</Button>
              )}
              <Button onClick={() => taskDelete(task.id)}>Delete task</Button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};
