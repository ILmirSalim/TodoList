export const modifyProcess = (groupId, taskId, setGroup, getItemInLS, setItemInLS) => {
    const groupData = getItemInLS();
    const currentGroup = groupData.find((group) => group.id === Number(groupId));
    const currentTask = currentGroup.tasks.find((task) => task.id === taskId);
    currentTask.inProcess = true;
    setItemInLS(groupData)
    setGroup(currentGroup);
  };
  
  export const pushTask = (newTaskText, newTaskDeadline, groupId, setGroup, getItemInLS, setItemInLS) => {
    const groupData = getItemInLS();
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
    setItemInLS(groupData)
    setGroup(currentGroup);
  }
  
  export const finishTask = (groupId, taskId, setGroup, getItemInLS, setItemInLS) => {
    const groupData = getItemInLS();
    const currentGroup = groupData.find((group) => group.id === Number(groupId));
    const currentTask = currentGroup.tasks.find((task) => task.id === taskId);
    currentTask.completed = true;
    setItemInLS(groupData)
    setGroup(currentGroup)
  }
  
  export const deleteTask = (taskId, setGroup, groupId, getItemInLS, setItemInLS) => {
    const groupData = getItemInLS();
    const currentGroup = groupData.find((group) => group.id === Number(groupId));
    currentGroup.tasks = currentGroup.tasks.filter((task) => task.id !== taskId);
    setItemInLS(groupData)
    setGroup(currentGroup);
  };