import React, { useEffect, useState, useRef } from 'react';
import { CreateGroupForm } from '../../components/CreateGroupForm';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { GroupList } from '../../components/GroupList';
import { deleteGroup } from './helpers/index'
import { createGroup } from './helpers/index'
import { GROUPS } from '../../constants/index'
import './style.css'
import { Group } from '../../models';

const MainPage: React.FC = () => {
  const [groupsData, setGropsData] = useState<Group[]>([]);
  const [users, setUsers] = useState<string[]>([]);
  const [group, setGroup] = useState<Group>({
    name: '',
    color: 'black',
    tasks: [],
  });

  const { getItemInLS, setItemInLS } = useLocalStorage(GROUPS);

  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (name: string, value: string) => {
    setGroup({ ...group, [name]: value });
  };

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsers(e.target.value.split(',').map((user) => user.trim())); // получаем массив имен пользователей из поля ввода
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createGroup(users, setGropsData, groupsData, group, getItemInLS, setItemInLS);
  };

  const handleDeleteGroup = (groupId: number) => {
    deleteGroup(groupId, setGropsData, getItemInLS, setItemInLS);
  };

  useEffect(() => {
    const groupData = getItemInLS();
    if (groupData) {
      setGropsData(groupData);
    }
    inputRef.current?.focus();
  }, [getItemInLS]);

  const disabled = !group.name || users.length === 0;

  return (
    <div>
      <CreateGroupForm
        handleSubmit={handleSubmit}
        group={group}
        onChange={onChange}
        users={users}
        handleUserChange={handleUserChange}
        disabled={disabled}
        inputRef={inputRef}
      />
      <GroupList groupsData={groupsData} handleDeleteGroup={handleDeleteGroup} />
    </div>
  );
};
export default MainPage;
