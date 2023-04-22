import { Group } from '../../../models/index'
import { Task } from '../../../models/index'

export const modifyProcess = (
  groupId: string,
  taskId: number,
  setGroup: (currentGroup: Group) => void,
  getItemInLS: () => Group[] | null,
  setItemInLS: (data: Group[]) => void
): void => {
  const groupData: Group[] | null = getItemInLS();
  const currentGroup: Group | undefined = groupData?.find(
    (group) => group.id === Number(groupId)
  );
  if (!currentGroup) return;
  const currentTask = currentGroup.tasks.find((task) => task.id === taskId);
  if (!currentTask) return;
  currentTask.inProcess = true;
  setItemInLS(groupData || []);
  setGroup(currentGroup);
};

export const pushTask = (
  newTaskText: string,
  newTaskDeadline: string,
  groupId: string,
  setGroup: (currentGroup: Group) => void,
  getItemInLS: () => Group[] | null,
  setItemInLS: (data: Group[]) => void
): void => {
  const groupData: Group[] | null = getItemInLS();
  const currentGroup: Group | undefined = groupData?.find(
    (group) => group.id === Number(groupId)
  );

  if (!currentGroup) return;
  const newTask: Task = {
    id: Date.now(),
    text: newTaskText,
    deadline: newTaskDeadline,
    completed: true,
    inProcess: false,
  };

  const newDeadline: Date = new Date(newTask.deadline);
  if (newDeadline && newDeadline > new Date()) {
    newTask.completed = false;
  }
  currentGroup.tasks.push(newTask);
  setItemInLS(groupData || []);
  setGroup(currentGroup);
};

export const finishTask = (
  groupId: string,
  taskId: number,
  setGroup: (currentGroup: Group) => void,
  getItemInLS: () => Group[] | null,
  setItemInLS: (data: Group[]) => void
): void => {
  const groupData: Group[] | null = getItemInLS();
  const currentGroup: Group | undefined = groupData?.find(
    (group) => group.id === Number(groupId)
  );
  if (!currentGroup) return;
  const currentTask = currentGroup.tasks.find((task) => task.id === taskId);
  if (!currentTask) return;
  currentTask.completed = true;
  setItemInLS(groupData || []);
  setGroup(currentGroup);
};

export const deleteTask = (
  taskId: number,
  setGroup: (currentGroup: Group) => void,
  groupId: string,
  getItemInLS: () => Group[] | null,
  setItemInLS: (data: Group[]) => void
): void => {
  const groupData: Group[] | null = getItemInLS();
  const currentGroup: Group | undefined = groupData?.find(
    (group) => group.id === Number(groupId)
  );
  if (!currentGroup) return;
  currentGroup.tasks = currentGroup.tasks.filter((task) => task.id !== taskId);
  setItemInLS(groupData || []);
  setGroup(currentGroup);
};

  // Пока тестирую не стал удалять старый код
  // export const pushTask = (
  //   newTaskText: string,
  //   newTaskDeadline: string,
  //   groupId: string,
  //   setGroup: (currentGroup: Group) => void,
  //   getItemInLS: () => Group[],
  //   setItemInLS: (data: Group[]) => void
  // ): void => {
  //   const groupData: Group[] = getItemInLS();
  //   const currentGroup: Group | undefined = groupData.find(
  // (group) => group.id === Number(groupId)
  //   );
  //   if (!currentGroup) return;
  //   const newTask: Task = {
  // id: Date.now(),
  // text: newTaskText,
  // deadline: newTaskDeadline,
  // completed: true,
  // inProcess: false,
  //   };
  //   const newDeadline: Date = new Date(newTask.deadline);
  //   if (newDeadline && newDeadline > new Date()) {
  // newTask.completed = false;
  //   }
  //   currentGroup.tasks.push(newTask);
  //   setItemInLS(groupData);
  //   setGroup(currentGroup);
  // };

  // export const finishTask = (
  //   groupId: string,
  //   taskId: number,
  //   setGroup: (currentGroup: Group) => void,
  //   getItemInLS: () => Group[],
  //   setItemInLS: (data: Group[]) => void
  // ): void => {
  //   const groupData: Group[] = getItemInLS();
  //   const currentGroup: Group | undefined = groupData.find(
  // (group) => group.id === Number(groupId)
  //   );
  //   if (!currentGroup) return;
  //   const currentTask = currentGroup.tasks.find((task) => task.id === taskId);
  //   if (!currentTask) return;
  //   currentTask.completed = true;
  //   setItemInLS(groupData);
  //   setGroup(currentGroup);
  // };
  // export const deleteTask = (
  //   taskId: number,
  //   setGroup: (currentGroup: Group) => void,
  //   groupId: string,
  //   getItemInLS: () => Group[],
  //   setItemInLS: (data: Group[]) => void
  // ): void => {
  //   const groupData: Group[] = getItemInLS();
  //   const currentGroup: Group | undefined = groupData.find(
  // (group) => group.id === Number(groupId)
  //   );
  //   if (!currentGroup) return;
  //   currentGroup.tasks = currentGroup.tasks.filter((task) => task.id !== taskId);
  //   setItemInLS(groupData);
  //   setGroup(currentGroup);
  // };
