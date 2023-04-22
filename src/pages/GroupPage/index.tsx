import React, { useState, useEffect, useCallback } from 'react';
import { deleteTask, finishTask, pushTask, modifyProcess } from './helpers/index';
import { useNavigate, useParams } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Button } from '../../components/ui-components/Button';
import { GROUPS } from '../../constants/index'
import { TaskList } from './TaskList';
import { AddTask } from './AddTask';
import { Group } from '../../models';
import '../GroupPage/style.css'

export const GroupPage: React.FC = () => {
  const { groupId } = useParams<{ groupId: string }>(); // получение groupId из URL-адреса
  const [group, setGroup] = useState<Group | null>(null); // состояние для хранения данных о группе
  const [newTaskText, setNewTaskText] = useState<string>('')
  const [newTaskDeadline, setNewTaskDeadline] = useState<string>('');

  const navigate = useNavigate()
  const { getItemInLS, setItemInLS } = useLocalStorage(GROUPS)

  const goBack = () => {
    navigate('/')
  }

  const changeProcess = useCallback((taskId: number) => {
    modifyProcess(groupId!, taskId, setGroup, getItemInLS, setItemInLS)
  }, [groupId, getItemInLS, setItemInLS])

  const addTask = useCallback(() => {
    pushTask(newTaskText, newTaskDeadline, groupId!, setGroup, getItemInLS, setItemInLS)
  }, [groupId, newTaskDeadline, newTaskText, getItemInLS, setItemInLS]);

  const completeTask = useCallback((taskId: number) => {
    finishTask(groupId!, taskId, setGroup, getItemInLS, setItemInLS)
  }, [groupId, getItemInLS, setItemInLS]);

  const taskDelete = useCallback((taskId: number) => {
    deleteTask(taskId, setGroup, groupId!, getItemInLS, setItemInLS)
  }, [groupId, getItemInLS, setItemInLS]);

  useEffect(() => {
    const groupData = getItemInLS();
    const currentGroup = groupData?.find((group:Group) => group.id === Number(groupId)); // поиск группы по groupId
    setGroup(currentGroup || null);

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
