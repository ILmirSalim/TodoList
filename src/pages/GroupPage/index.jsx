import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components/ui-components/Button';
import { modifyProcess } from '../../helpers';
import { finishTask } from '../../helpers';
import { pushTask } from '../../helpers';
import { GROUPS } from '../../constants/index'
import { TaskList } from './TaskList';
import { AddTask } from './AddTask';
import { deleteTask } from '../../helpers';
import '../GroupPage/style.css'

export const GroupPage = () => {
  const { groupId } = useParams(); // получение groupId из URL-адреса
  const [group, setGroup] = useState(null); // состояние для хранения данных о группе
  const [newTaskText, setNewTaskText] = useState('')
  const [newTaskDeadline, setNewTaskDeadline] = useState('');

  const navigate = useNavigate()

  const goBack = () => {
    navigate('/')
  }

  const changeProcess = useCallback((taskId) => {
    modifyProcess(groupId, taskId, setGroup)
  }, [groupId])

  const addTask = useCallback(() => {
    pushTask(newTaskText, newTaskDeadline, groupId, setGroup)
  }, [groupId, newTaskDeadline, newTaskText]);

  const completeTask = useCallback((taskId) => {
    finishTask(groupId, taskId, setGroup)
  }, [groupId]);

  const taskDelete = useCallback((taskId) => {
    deleteTask(taskId, setGroup, groupId)
  }, [groupId]);

  useEffect(() => {
    const groupData = JSON.parse(localStorage.getItem(GROUPS));
    const currentGroup = groupData.find((group) => group.id === Number(groupId)); // поиск группы по groupId
    setGroup(currentGroup);
  }, [groupId]);

  return (
    <div>
      {group && (
        <>
          <h1 className='groupName' style={{ color: group.color }}>
            Name group: {group.name}
          </h1>
          <TaskList group={group}
            changeProcess={changeProcess}
            completeTask={completeTask}
            taskDelete={taskDelete} />

          <AddTask
            newTaskText={newTaskText}
            setNewTaskText={setNewTaskText}
            newTaskDeadline={newTaskDeadline}
            setNewTaskDeadline={setNewTaskDeadline}
            addTask={addTask}
          />
          <Button onClick={goBack}>Go back</Button>
        </>
      )}
      {!group && <> No group with this ID....</>}
    </div>
  );
};

export default GroupPage;

