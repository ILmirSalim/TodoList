import React, { useEffect, useState, useRef } from 'react';
import { CreateGroupForm } from '../../components/CreateGroupForm';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { GroupList } from '../../components/GroupList';
import { deleteGroup } from './helpers/index'
import { createGroup } from './helpers/index'
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

  const { getItemInLS, setItemInLS } = useLocalStorage(GROUPS)

  const inputRef = useRef()

  const onChange = (name, value) => {
    setGroup({ ...group, [name]: value })
  };

  const handleUserChange = (e) => {
    setUsers(e.target.value.split(",").map((user) => user.trim())); // получаем массив имен пользователей из поля ввода
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createGroup(users, setGropsData, groupsData, group, getItemInLS, setItemInLS)
  };

  const handleDeleteGroup = (groupId) => {
    deleteGroup(groupId, setGropsData, getItemInLS, setItemInLS)
  };

  useEffect(() => {
    const groupData = getItemInLS();
    if (groupData) {
      setGropsData(groupData);
    }
    inputRef.current.focus()
  }, [getItemInLS])

  const disabled = !group.name || users.length === 0

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
        handleDeleteGroup={handleDeleteGroup}
      />
    </div>
  );
};

export default MainPage;