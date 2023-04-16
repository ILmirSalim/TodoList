import { useState, useEffect } from 'react';
import { Input } from '../../components/ui-components/Input/Index';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { GROUPS } from '../../constants/index'
import { Link } from 'react-router-dom';

export const UserGroupPage = () => {
  const [userGroups, setUserGroups] = useState([]);
  const [userName, setUserName] = useState('');
  const { getItemInLS } = useLocalStorage(GROUPS)
  
  const onChange = (e) => {
    setUserName(e.target.value)
  }

  useEffect(() => {
    const groups = getItemInLS()
    if (groups) {
      const userGroups = groups.filter((group) => group.users.indexOf(userName) >= 0);
      setUserGroups(userGroups);
    }
  }, [userName, getItemInLS]);

  return (
    <div>
      <h2>My groups:</h2>
      <Input onChange={onChange} value={userName} placeholder='Enter user name...' />
      <div>
        {userName && userGroups.map((group) => (
          <Link className='linkMain' key={group.id} to={`/group/${group.id}`}>
            <div style={{ color: group.color }} key={group.id}>{group.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserGroupPage;