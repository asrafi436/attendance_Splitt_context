import React, { createContext, useState } from "react";

export const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const [names, setNames] = useState([
    { id: 1, name: "Tonmoy", isattend: true },
    { id: 2, name: "Asrafi", isattend: false },
  ]);
  const [name, setName] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [update, setUpdate] = useState(null);

  const absentList = names.filter((name) => name.isattend === false);
  const attendList = names.filter((name) => name.isattend === true);

  const addHandler = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("Please enter a name");
    }
    const newName = {
      id: names.length + 1,
      name:  name,
      isattend: undefined,
    };
     setNames([... names, newName]);
     setName("");
  };

  const deleteHandler = (id) => {
    const newNames =  names.filter((name) => name.id !== id);
     setNames(newNames);
  };

  const editHandler = (name) => {
     setEditMode(true);
     setName(name.name);
     setUpdate(name);
  };

  const updateHandler = (e) => {
    e.preventDefault();
    if (! name.trim()) {
      return alert("No Changes");
    }

    const updatedName =  names.map((nameN) => {
      if (nameN.id === update.id) {
        return { ...nameN, name:  name };
      }
      return nameN;
    });

     setNames(updatedName);
     setName("");
     setEditMode(false);
     setUpdate(null);
  };

  const attendHandler = (name) => {
    if (name.isattend == true || name.isattend == false) {
      return alert("Already in list");
    }

    const attend =  names.map((nameN) => {
      if (nameN.id == name.id) {
        return { ...nameN, isattend: true };
      }
      return nameN;
    });
     setNames(attend);
  };

  const absentHandler = (name) => {
    if (name.isattend == true || name.isattend == false) {
      return alert("Already in list");
    }
    const absent =  names.map((nameN) => {
      if (nameN.id == name.id) {
        return { ...nameN, isattend: false };
      }
      return nameN;
    });
     setNames(absent);
  };

  

  const toggleHandler = (name) => {
    console.log(name);
    const toggle =  names.map((nameN) => {
      if (nameN.id == name.id) {
        if (name.isattend == true) {
          return { ...nameN, isattend: false };
        } else {
          return { ...nameN, isattend: true };
        }
      }
      return nameN;
    });

     setNames(toggle);
  };

  const contexValue = {
    names,
    setNames,
    name,
    setName,
    editMode,
    setEditMode,
    update,
    setUpdate,
    attendList,
    absentList,
    addHandler,
    deleteHandler,
    editHandler,
    updateHandler,
    attendHandler,
    absentHandler,
    toggleHandler,    
  };

  return (
    <StudentContext.Provider value={contexValue}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
