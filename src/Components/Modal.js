/* Hooks */
import { createPortal } from "react-dom";
import { useContext } from "react";
import { React } from "react";

/* Components */
import closeIcon from "../assets/svg/closeIcon.svg";
import { TodoContext } from "./TodoContext";

function SectionModal () {
  const { setModal, addTodo } = useContext(TodoContext);

  return createPortal(
    <section className="section__modal">
      <button 
      className="icon icon-modal"
      onClick={() => setModal(false)}>
        <img src={closeIcon} alt="Close Modal" />
      </button>
      <section className="info-todo">
        <form 
        className="form"
        onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
              <label htmlFor="nameTodo">Agrega un nombre a tu tarea</label>
              <input 
              className="name-todo input" 
              id="nameTodo" 
              type="text" 
              required/>
          </div>
          <div className="form-group">
              <label htmlFor="deascriptionTodo">Agrega una descripción</label>
              <textarea 
              className="description-todo input" 
              id="descriptionTodo" 
              style={{padding:"12px"}}
              required></textarea>
          </div>
          <button 
          type="button"
          onClick={() => {
            const getTex = document.getElementById('nameTodo');
            const getDescription = document.getElementById('descriptionTodo');

            addTodo(getTex.value, getDescription.value);

            setModal(false);
          }}
          className="buttonSend button"
          style={{fontSize: "20px", marginTop:"20px"}}>
            <p>Añadir</p>
          </button>
        </form>
      </section>
    </section>, 
    document.getElementById('modal')
  )
}

export { SectionModal }