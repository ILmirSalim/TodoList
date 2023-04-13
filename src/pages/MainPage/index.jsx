import React, { useEffect, useState } from 'react';
import { CreateGroupForm } from '../../components/CreateGroupForm';
import { GroupList } from '../../components/GroupList';
import { createGroup } from '../../helpers/index'
import { GROUPS } from '../../constants/index'
import './style.css'

export const MainPage = () => {
  const [groupsData, setGropsData] = useState([])
  const [users, setUsers] = useState([])
  const [group, setGroup] = useState({
    name: '',
    color: 'black',
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
    createGroup(users, setGropsData, groupsData, group)
  };

  useEffect(() => {
    const groupData = JSON.parse(localStorage.getItem(GROUPS));
    if (groupData) {
      setGropsData(groupData);
    }
  }, [])

  const disabled = !group.name

  return (
    <div>
      <CreateGroupForm handleSubmit={handleSubmit}
        group={group}
        onChange={onChange}
        users={users}
        handleUserChange={handleUserChange}
        disabled={disabled}
      />
      <GroupList groupsData={groupsData}
      />
    </div>
  );
};

export default MainPage;