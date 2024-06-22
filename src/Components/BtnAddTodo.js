import { useContext } from 'react';
import React from 'react';

import { TodoContext } from './TodoContext';

const BtnAddTodo = () => {
  const { setModal } = useContext(TodoContext);

  return(
    <>
      <button 
      className="btn-addTodo" 
      onClick={() => setModal(true)}>
        <p 
        className="btn-addTodo-text" 
        >Añade un nuevo ToDo</p>
        <img
        src="https://www.reshot.com/preview-assets/icons/ME3P9S8WHB/plus-ME3P9S8WHB.svg"
        className="btn-addTodo-icon" 
        alt="Add Item"/>
      </button>
    </>
  )
}

export {BtnAddTodo};