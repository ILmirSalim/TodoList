import { Group } from "../../../models";

export const createGroup = (
    users: string[],
    setGropsData: React.Dispatch<React.SetStateAction<Group[]>>,
    groupsData: Group[],
    group: Group,
    getItemInLS: () => Group[] | null,
    setItemInLS: (data: Group[]) => void
  ): void => {
    const userId = Date.now();
    const newGroup: Group = { id: userId, users, ...group };
    console.log(newGroup);
    
    try {
      const groupData = getItemInLS();
  
      if (!groupData) {
        setItemInLS([newGroup]);
        setGropsData([newGroup]);
        alert('You have successfully added a group!');
        return;
      }
      if (groupData.find((currentGroup) => currentGroup.name === group.name)) {
        alert('A group with that name already exists!');
        return;
      }
  
      groupData.push(newGroup);
      setItemInLS(groupData);
      setGropsData([newGroup, ...groupsData]);
      alert('You have successfully added a group!');
    } catch (error) {
      console.log(error);
    }
  };
  
  export const deleteGroup = (
    groupId: number,
    setGropsData: React.Dispatch<React.SetStateAction<Group[]>>,
    getItemInLS: () => Group[] | null,
    setItemInLS: (data: Group[]) => void
  ): void => {
    const groupData = getItemInLS();
    const updatedGroups = groupData?.filter((group) => group.id !== groupId);
    setItemInLS(updatedGroups || []);
    setGropsData(updatedGroups || []);
  };
