import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Button } from '../../components/ui-components/Button';
import { modifyProcess } from './helpers/index';
import { GROUPS } from '../../constants/index'
import { deleteTask } from './helpers/index';
import { finishTask } from './helpers/index';
import { pushTask } from './helpers/index';
import { TaskList } from './TaskList';
import { AddTask } from './AddTask';
import '../GroupPage/style.css'

export const GroupPage = () => {
  const { groupId } = useParams(); // получение groupId из URL-адреса
  const [group, setGroup] = useState(null); // состояние для хранения данных о группе
  const [newTaskText, setNewTaskText] = useState('')
  const [newTaskDeadline, setNewTaskDeadline] = useState('');

  const navigate = useNavigate()
  const { getItemInLS, setItemInLS } = useLocalStorage(GROUPS)

  const goBack = () => {
    navigate('/')
  }

  const changeProcess = useCallback((taskId) => {
    modifyProcess(groupId, taskId, setGroup, getItemInLS, setItemInLS)
  }, [groupId, getItemInLS, setItemInLS])

  const addTask = useCallback(() => {
    pushTask(newTaskText, newTaskDeadline, groupId, setGroup, getItemInLS, setItemInLS)
  }, [groupId, newTaskDeadline, newTaskText, getItemInLS, setItemInLS]);

  const completeTask = useCallback((taskId) => {
    finishTask(groupId, taskId, setGroup, getItemInLS, setItemInLS)
  }, [groupId, getItemInLS, setItemInLS]);

  const taskDelete = useCallback((taskId) => {
    deleteTask(taskId, setGroup, groupId, getItemInLS, setItemInLS)
  }, [groupId, getItemInLS, setItemInLS]);

  useEffect(() => {
    const groupData = getItemInLS();
    const currentGroup = groupData.find((group) => group.id === Number(groupId)); // поиск группы по groupId
    setGroup(currentGroup);

  }, [groupId, getItemInLS]);

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

