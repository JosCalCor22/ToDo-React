import React from "react";

const HeaderTodo = ({ searchValue, setSearchValue, completed, numberTodo }) => {

  console.log('Este es el estado: ' + searchValue);

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
