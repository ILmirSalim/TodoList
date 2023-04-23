import { Group } from "../../../interfaces";
import { ICreateGroupProps, IDeleteGroupProps } from "./interface";

export const createGroup = ({ users, setGropsData, groupsData, group, getItemInLS, setItemInLS }: ICreateGroupProps): void => {
  const userId = Date.now();
  const newGroup: Group = { id: userId, users, ...group };

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

export const deleteGroup = ({groupId,setGropsData,getItemInLS,setItemInLS}:IDeleteGroupProps): void => {
  const groupData = getItemInLS();
  const updatedGroups = groupData?.filter((group) => group.id !== groupId);
  setItemInLS(updatedGroups || []);
  setGropsData(updatedGroups || []);
};
