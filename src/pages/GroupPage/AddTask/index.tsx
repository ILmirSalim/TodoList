import React, { FC } from "react";
import { Button } from "../../../components/ui-components/Button";
import { AddTaskProps } from './model/index'
import './style.css'

export const AddTask: FC<AddTaskProps> = ({ newTaskText, newTaskDeadline, setNewTaskText, setNewTaskDeadline, addTask }) => {
  const disabled = !newTaskText;
  return (
    <form className='form' onSubmit={(e) => e.preventDefault()}>
      <input className='inputForm'
        type="text"
        placeholder="Enter the task text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />
      <br />
      <input className='inputForm'
        type="date"
        value={newTaskDeadline}
        onChange={(e) => setNewTaskDeadline(e.target.value)}
      />
      <br />
      <Button disabled={disabled} onClick={addTask}>Add task</Button>
    </form>
  )
}
// export const AddTask = ({ newTaskText, newTaskDeadline, setNewTaskText, setNewTaskDeadline, addTask }) => {
//   const disabled = !newTaskText;
//   return (
//     <form className='form' onSubmit={(e) => e.preventDefault()}>
//       <input className='inputForm'
//         type="text"
//         placeholder="Enter the task text"
//         value={newTaskText}
//         onChange={(e) => setNewTaskText(e.target.value)}
//       />
//       <br />
//       <input className='inputForm'
//         type="date"
//         value={newTaskDeadline}
//         onChange={(e) => setNewTaskDeadline(e.target.value)}
//       />
//       <br />
//       <Button disabled={disabled} onClick={addTask}>Add task</Button>
//     </form>
//   )
// }