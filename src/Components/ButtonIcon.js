import { useContext } from 'react';
import React from 'react';

import { TodoContext } from './TodoContext';

const SectionAddTodo = () => {
  const { setModal } = useContext(TodoContext);

  return(
    <>
      <button 
      className="button" 
      style={{marginBottom:"36px"}}
      onClick={() => setModal(true)}>
        <p 
        className="button-text" 
        style={{fontSize: "20px"}}
        >Añade un nuevo ToDo</p>
        <img
        src="https://www.reshot.com/preview-assets/icons/ME3P9S8WHB/plus-ME3P9S8WHB.svg"
        className="button-svg" 
        alt="Add Item"
        style={{width: "20px"}}/>
      </button>
    </>
  )
}

export {SectionAddTodo};