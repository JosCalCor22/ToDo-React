import React from "react";
import { useState } from "react";
import { listToDo } from "./ItemTodo";
const HeaderTodo = () => {

  const[searchValue, setSearchValue] = useState("");

 const countTask = () => {
  return listToDo.filter((task) => task.completed).length;
 }

 const filterTask = () => {
  return listToDo.filter((task) => task.name.includes(searchValue));
 }

  return (
    <>
      <div className="header">
        <h1 className="header-title">Completaste <span>{countTask()}</span> de <span>{listToDo.length}</span></h1>
        <input 
          className="header-input input" 
          type="search" 
          id="form_input"
          value={searchValue}
          onChange={(event)=>{
            setSearchValue(event.target.value);
          }}
          onClick={()=>{
            console.log('El usuario esta buscando: ' + searchValue);
          }}
          placeholder="Terminar Curso" />
      </div>
    </>
  );
}

export { HeaderTodo };
