import React, { useContext } from "react";
import { StudentContext } from "../context/Student";

export const Absent = () => {
  
 const {absentList,toggleHandler} = useContext(StudentContext);

  return (
    <div>
      <div className="absent-student-list">
        <h2>Absent Name List</h2>

        <ul className="name-list">
          {absentList.map((name) => (
            <li key={name.id}>
              <span>{name.name}</span>
              <button onClick={() => toggleHandler(name)}>Make Attend</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
