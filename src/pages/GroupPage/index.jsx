import React, { useState, useEffect, useCallback} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components/ui-components/Button';
import '../GroupPage/style.css'
import { AddTask } from './AddTask';
import { TaskList } from './TaskList';
import {GROUPS} from '../../constants/index'

export const GroupPage = () => {
  const { groupId } = useParams(); // получение groupId из URL-адреса
  const [group, setGroup] = useState({}); // состояние для хранения данных о группе
  const [newTaskText, setNewTaskText] = useState('')
  const [newTaskDeadline, setNewTaskDeadline] = useState('');
 
  const navigate = useNavigate()

  const goBack = () => {
    navigate('/')
  }

  const changeProcess = useCallback((taskId) => {
    const groupData = JSON.parse(localStorage.getItem(GROUPS));
    const currentGroup = groupData.find((group) => group.id === Number(groupId));
    const currentTask = currentGroup.tasks.find((task) => task.id === taskId);
    currentTask.inProcess = true;
    localStorage.setItem(GROUPS, JSON.stringify(groupData));
    setGroup(currentGroup);
  },[groupId])

  const addTask = useCallback(() => {
    const groupData = JSON.parse(localStorage.getItem(GROUPS));
    const currentGroup = groupData.find((group) => group.id === Number(groupId)) // поиск группы по groupId
    const newTask = {
      id: Date.now(),
      text: newTaskText,
      deadline: newTaskDeadline,
      completed: true,
      inProcess: false
    };
    const newDeadline = new Date(newTask.deadline) // преобразование даты из строки в объект Date
    
    if (newDeadline && newDeadline > new Date()) { // если дата завершения больше, устанавливаем completed false
      newTask.completed = false;
    }

    currentGroup.tasks.push(newTask); // добавление новой задачи в текущий массив задач группы
    localStorage.setItem(GROUPS, JSON.stringify(groupData)); // сохранение обновленного массива groups в localstorage
    setGroup(currentGroup);
  },[groupId, newTaskDeadline, newTaskText]);

  const completeTask = useCallback((taskId) => {
    const groupData = JSON.parse(localStorage.getItem(GROUPS));
    const currentGroup = groupData.find((group) => group.id === Number(groupId));
    const currentTask = currentGroup.tasks.find((task) => task.id === taskId);
    currentTask.completed = true;
    localStorage.setItem(GROUPS, JSON.stringify(groupData));
    setGroup(currentGroup);
  },[groupId]);

  useEffect(() => {
    const groupData = JSON.parse(localStorage.getItem(GROUPS));
    const currentGroup = groupData.find((group) => group.id === Number(groupId)); // поиск группы по groupId
    setGroup(currentGroup);
  }, [groupId]);
  
  return (
    <div>
      <h1 className='groupName' style={{ color: group.color }} >Name group: {group.name}</h1>

      <TaskList group={group}
      changeProcess={changeProcess}
      completeTask={completeTask}/>

      <AddTask newTaskText={newTaskText}
      setNewTaskText={setNewTaskText}
      newTaskDeadline={newTaskDeadline}
      setNewTaskDeadline={setNewTaskDeadline}
      addTask={addTask}/>

      <Button onClick={goBack}>Вернуться назад</Button>

    </div>
  );
};

export default GroupPage;

