import { GROUPS } from '../constants/index'

export const createGroup = (users, setGropsData, groupsData, group) => {
  const userId = Date.now()
  const newGroup = { id: userId, users: users, ...group }

  try {
    const groupData = JSON.parse(localStorage.getItem(GROUPS))

    if (!groupData) {
      localStorage.setItem(GROUPS, JSON.stringify([newGroup]))
      setGropsData([newGroup])
      alert('You have successfully added a group!')
      return
    }
    if (groupData.find((currentGroup) => currentGroup.name === group.name)) {
      alert('A group with that name already exists!')
      return
    }

    groupData.push(newGroup)
    localStorage.setItem(GROUPS, JSON.stringify(groupData))
    setGropsData([newGroup, ...groupsData])
    alert('You have successfully added a group!')

  } catch (error) {
    console.log(error)
  }
}

export const modifyProcess = (groupId, taskId, setGroup) => {
  const groupData = JSON.parse(localStorage.getItem(GROUPS));
  const currentGroup = groupData.find((group) => group.id === Number(groupId));
  const currentTask = currentGroup.tasks.find((task) => task.id === taskId);
  currentTask.inProcess = true;
  localStorage.setItem(GROUPS, JSON.stringify(groupData));
  setGroup(currentGroup);
};

export const pushTask = (newTaskText, newTaskDeadline, groupId, setGroup) => {
  const groupData = JSON.parse(localStorage.getItem(GROUPS));
  const currentGroup = groupData.find((group) => group.id === Number(groupId)) // поиск группы по groupId
  const newTask = {
    id: Date.now(),
    text: newTaskText,
    deadline: newTaskDeadline,
    completed: true,
    inProcess: false
  };
  const newDeadline = new Date(newTask.deadline) // преобразование даты из строки в объект Date

  if (newDeadline && newDeadline > new Date()) { // если дата завершения больше, устанавливаем completed false
    newTask.completed = false;
  }

  currentGroup.tasks.push(newTask); // добавление новой задачи в текущий массив задач группы
  localStorage.setItem(GROUPS, JSON.stringify(groupData)); // сохранение обновленного массива groups в localstorage
  setGroup(currentGroup);
}

export const finishTask = (groupId, taskId, setGroup) => {
  const groupData = JSON.parse(localStorage.getItem(GROUPS));
  const currentGroup = groupData.find((group) => group.id === Number(groupId));
  const currentTask = currentGroup.tasks.find((task) => task.id === taskId);
  currentTask.completed = true;
  localStorage.setItem(GROUPS, JSON.stringify(groupData));
  setGroup(currentGroup)
}

export const deleteTask = (taskId, setGroup, groupId) => {
  const groupData = JSON.parse(localStorage.getItem(GROUPS));
  const currentGroup = groupData.find((group) => group.id === Number(groupId));
  currentGroup.tasks = currentGroup.tasks.filter((task) => task.id !== taskId);
  localStorage.setItem(GROUPS, JSON.stringify(groupData));
  setGroup(currentGroup);
};

