import React, { useEffect, useState } from 'react';
import { FormInMain } from '../../components/FormInMain';
import { GroupList } from '../../components/GroupList';
import {GROUPS} from '../../constants/index'
import './style.css'

export const MainPage = () => {
  const [groupsData, setGropsData] = useState([])
  const [users, setUsers] = useState([])
  const [group, setGroup] = useState({
    name: '',
    color: '',
    tasks: []
  })
  
  const onChange = (name, value) => {
    setGroup({ ...group, [name]: value })
  };

  const handleUserChange = (e) => {
    setUsers(e.target.value.split(",").map((user) => user.trim())); // получаем массив имен пользователей из поля ввода
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = Date.now()
    const newGroup = { id: userId, users: users, ...group }

    try {
      const groupData = JSON.parse(localStorage.getItem(GROUPS))

      if (!groupData) {
        localStorage.setItem(GROUPS, JSON.stringify([newGroup]))
        setGropsData([newGroup])
        alert('Вы успешно добавили группу!')
        return
      }
      if (groupData.find((user) => user.name === group.name)) {
        alert('Группа с таким именем уже существует!')
        return
      }

      groupData.push(newGroup)
      localStorage.setItem(GROUPS, JSON.stringify(groupData))
      setGropsData([newGroup, ...groupsData])
      alert('Вы успешно добавили группу!')

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    const groupData = JSON.parse(localStorage.getItem(GROUPS));
    if (groupData) {
      setGropsData(groupData);
    }
  }, [])

  const disabled = !group.name || !group.color

  return (
    <div>
      <FormInMain handleSubmit={handleSubmit}
      group={group}
      onChange={onChange}
      users={users}
      handleUserChange={handleUserChange}
      disabled={disabled}
      />
      <GroupList groupsData={groupsData} />
    </div>
  );
};

export default MainPage;