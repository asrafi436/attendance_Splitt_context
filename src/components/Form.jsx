import React from 'react'
import { useContext } from 'react';
import { StudentContext } from '../context/Student';

export const Form = () => {

  const {name,setName,editMode,updateHandler,addHandler} =useContext(StudentContext);
    
    
  return (
    <div>
      <form className="input-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="submit"
          onClick={editMode ? updateHandler : addHandler}
        >
          {editMode ? "Update" : "Add Name"}
        </button>
      </form>
    </div>
  );
}
