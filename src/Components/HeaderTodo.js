/* Hooks */
import React from "react";
import { useContext } from "react";

/* Components */
import { TodoContext } from "./TodoContext";
import { BtnAddTodo } from "./BtnAddTodo";

const HeaderTodo = () => {
  const { todoCompletedFilter, groupTodo, searchValue, setSearchValue } = useContext(TodoContext);
  return (
    <>
      <section className="header__todo">
        <h1 className="header__todo--title">Completaste <span>{todoCompletedFilter}</span> de <span>{groupTodo.length}</span></h1>
        <div className="header__todo--inputs">
          <input 
            className="header-input" 
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
            <BtnAddTodo />
        </div>
      </section>
    </>
  );
}

export { HeaderTodo };
