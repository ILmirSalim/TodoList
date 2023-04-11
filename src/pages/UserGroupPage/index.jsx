import { useState, useEffect } from 'react';
import { Input } from '../../components/ui-components/Input/Index';
import { GROUPS } from '../../constants/index'

export const UserGroupPage = () => {
  const [userGroups, setUserGroups] = useState([]);
  const [userName, setUserName] = useState('');

  const onChange = (e) => {
    setUserName(e.target.value)
  }

  useEffect(() => {
    const groups = localStorage.getItem(GROUPS);
    if (groups) {
      const parsedGroups = JSON.parse(groups);
      console.log(parsedGroups);
      const userGroups = parsedGroups.filter((group) => group.users.indexOf(userName) >= 0);
      setUserGroups(userGroups);
    }
    
  }, [userName]);
  
  return (
    <div>
      <h2>My groups:</h2>
      <Input onChange={onChange} value={userName} placeholder='Введите имя пользователя' />
      <div>
        {userName && userGroups.map((group) => (
          <div style={{ color: group.color }} key={group.id}>{group.name}</div>
        ))}
      </div>
    </div>
  );
};

export default UserGroupPage;