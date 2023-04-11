import React from "react";
import { Button } from "../../../components/ui-components/Button";
import './style.css'

export const AddTask = ({newTaskText,newTaskDeadline, setNewTaskText, setNewTaskDeadline, addTask}) => {
    return(
        <form className='form' onSubmit={(e) => e.preventDefault()}>
        <input className='inputForm'
          type="text"
          placeholder="Введите текст задачи"
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
        <Button onClick={addTask}>Добавить задачу</Button>
      </form>
    )
}