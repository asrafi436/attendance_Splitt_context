import React from 'react'
import { useContext } from 'react';
import { StudentContext } from '../context/Student';


export const List = () => {
const {names,deleteHandler,editHandler,attendHandler,absentHandler} = useContext(StudentContext);
    
  return (
    <div>
      <div className="all-student-list">
        <h2>All Name List</h2>

        <ul className="name-list">
          {names.map((name) => (
            <li key={name.id}>
              <span>{name.name}</span>
              <button onClick={() => deleteHandler(name.id)}>
                Delete
              </button>
              <button onClick={() => editHandler(name)}>Edit</button>
              <button onClick={() => attendHandler(name)}>Attend</button>
              <button onClick={() => absentHandler(name)}>Absent</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
