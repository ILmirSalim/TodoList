export interface AddTaskProps {
    newTaskText: string;
    newTaskDeadline: string;
    setNewTaskText: (text: string) => void;
    setNewTaskDeadline: (deadline: string) => void;
    addTask: () => void;
  }