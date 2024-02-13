const listToDo = [
  {
    id: window.crypto.randomUUID(),
    name: "Crear tu primer ToDo",
    description:"Elimina este ToDo de prueba y crea el tuyo",
    completed: false,
    cancel: false
  }
];

const TodoItem = ({ onComplete, onDelete, Itemcompleted, nameTodo, todoCancel, description, loading, error }) => {

  return (
    <>
      <ul className={Itemcompleted ? 'listCompleted' : todoCancel ? 'inactive' : 'list'}>
        <div
        className={!Itemcompleted ? "icon-check" : "inactive"} 
        onClick={onComplete}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M5 12l5 5l10 -10"></path>
          </svg>
        </div>
        <li>{ nameTodo }</li>
        <div 
        className={!todoCancel && !Itemcompleted ? "icon-closed" : "inactive"} 
        onClick={onDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </div>
        <div className="list__description">
          <p>{description}</p>
        </div>
      </ul>
    </>
  );
}

export {TodoItem , listToDo };