import React, { useEffect, useState, useRef } from 'react';
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

  const inputRef = useRef()
  
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
    inputRef.current.focus()
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
        inputRef={inputRef}
      />
      <GroupList groupsData={groupsData}
      />
    </div>
  );
};

export default MainPage;