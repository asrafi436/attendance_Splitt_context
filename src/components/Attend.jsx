import React from "react";
import { useContext } from "react";
import { StudentContext } from "../context/Student";


export const Attend = () => {
  const { attendList, toggleHandler } = useContext(StudentContext);
  return (
    <div>
      <div className="attend-student-list">
        <h2>Attend Name List</h2>
        <ul className="name-list">
          {attendList.map((name) => (
            <li key={name.id}>
              <span>{name.name}</span>
              <button onClick={() => toggleHandler(name)}>Make Absent</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
