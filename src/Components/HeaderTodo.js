/* Hooks */
import React from "react";
import { useContext } from "react";

/* Components */
import { TodoContext } from "./TodoContext";

const HeaderTodo = () => {
  const { completed, numberTodo, searchValue, setSearchValue } = useContext(TodoContext);
  return (
    <>
      <div className="header">
        <h1 className="header-title">Completaste <span>{completed}</span> de <span>{numberTodo}</span></h1>
        <input 
          className="header-input input" 
          type="search" 
          id="form_input"
          value={searchValue}
          onChange={(e)=>{
            setSearchValue(e.target.value);
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
