import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/ui-components/Input/Index";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { GROUPS } from "../../constants/index";
import { Group } from "../../models";

export const UserGroupPage: FC = () => {
  const [userGroups, setUserGroups] = useState<Group[]>([]);
  const [userName, setUserName] = useState<string>("");
  const { getItemInLS } = useLocalStorage(GROUPS);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  useEffect(() => {
    const groups = getItemInLS();
    if (groups) {
      const userGroups = groups.filter((group: Group) => group.users!.indexOf(userName) >= 0);
      setUserGroups(userGroups);
    }
  }, [userName, getItemInLS]);

  return (
    <div>
      <h2>My groups:</h2>
      <Input onChange={onChange} value={userName} placeholder="Enter user name..." />
      <div>
        {userName &&
          userGroups.map((group) => (
            <Link className="linkMain" key={group.id} to={`/group/${group.id}`}>
              <div style={{ color: group.color }} key={group.id}>
                {group.name}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default UserGroupPage;

