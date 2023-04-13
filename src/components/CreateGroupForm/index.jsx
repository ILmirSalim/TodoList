import React from "react"
import { Button } from "../ui-components/Button"
import './style.css'

export const CreateGroupForm = ({handleSubmit, onChange, group, handleUserChange, users, disabled, inputRef}) => {
    return (
        
      <form className='wrapper' onSubmit={handleSubmit}>
        <label className='labelContainer'>
          <h2>Name group:</h2>
          <input className='inputMain' type="text"
            ref={inputRef}
            name="name"
            placeholder='name group'
            value={group.name}
            onChange={(e) => onChange(e.target.name, e.target.value)} />
        </label>
        <label className='labelContainer'>
          <h2>Color group:</h2>
          <input className='inputMain' type="color"
            name="color"
            value={group.color}
            onChange={(e) => onChange(e.target.name, e.target.value)} />
        </label>
        <label className='labelContainer'>
          <h2>Name users:</h2>
          <input className='inputMain' type="text"
            name="users"
            placeholder='Name users'
            value={users}
            onChange={handleUserChange} />
            <div data-title="Use the:  ,  symbol to add multiple users"  className="info">i</div>
        </label>

        <Button disabled={disabled} type="submit">Create Group</Button>
        
      </form>
    )
}