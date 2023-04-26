import { Group } from '../../../interfaces/Group'
import { Task } from '../../../interfaces/Task'
import { IDeleteTask } from './interfaces/deleteTask';
import { IGetCurGroup } from './interfaces/getCurGroup'
import { IModifyProcessProps } from './interfaces/modifyProcess'
import { IPushProps } from './interfaces/pushTask'
import { IFinishTaskProps } from './interfaces/finishTask'

const getCurrentGroup = ({ groupId, getItemInLS }: IGetCurGroup) => {
  const groupData: Group[] | null = getItemInLS();

  const currentGroup: Group | undefined = groupData?.find(
    (group) => group.id === Number(groupId)
  );

  if (!currentGroup) return;
  return { currentGroup, groupData }
}

export const modifyProcess = ({ groupId, taskId, setGroup, getItemInLS, setItemInLS }: IModifyProcessProps): void => {
  const currentGroup = getCurrentGroup({ groupId, getItemInLS })

  const currentTask = currentGroup?.currentGroup.tasks.find((task) => task.id === taskId);

  if (!currentTask) return;

  currentTask.inProcess = true;
  setItemInLS(currentGroup?.groupData || []);
  setGroup(currentGroup!.currentGroup);
};

export const pushTask = ({ newTaskText, newTaskDeadline, groupId, setGroup, getItemInLS, setItemInLS }: IPushProps): void => {
  const currentGroup = getCurrentGroup({ groupId, getItemInLS })

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

  currentGroup?.currentGroup.tasks.push(newTask);
  setItemInLS(currentGroup?.groupData || []);
  setGroup(currentGroup!.currentGroup);
};

export const finishTask = ({ groupId, taskId, setGroup, getItemInLS, setItemInLS }: IFinishTaskProps): void => {
  const currentGroup = getCurrentGroup({ groupId, getItemInLS })

  const currentTask = currentGroup?.currentGroup.tasks.find((task) => task.id === taskId);

  if (!currentTask) return;

  currentTask.completed = true;
  setItemInLS(currentGroup?.groupData || []);
  setGroup(currentGroup!.currentGroup);
};

export const deleteTask = ({ taskId, setGroup, groupId, getItemInLS, setItemInLS }: IDeleteTask): void => {
  const currentGroup = getCurrentGroup({ groupId, getItemInLS })
  currentGroup!.currentGroup.tasks = currentGroup!.currentGroup.tasks.filter((task) => task.id !== taskId)
  setItemInLS(currentGroup?.groupData || []);
  setGroup(currentGroup!.currentGroup);
};

