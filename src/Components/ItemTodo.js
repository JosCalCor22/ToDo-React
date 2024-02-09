const listToDo = [
  {
    id: window.crypto.randomUUID(),
    name: "Hacer curso",
    description:"Terminar el curso de programacion con React",
    completed: false,
    cancel: false
  }, {
    id: window.crypto.randomUUID(),
    name: "Jugar al fútbol",
    description:"Jugar con mis amigos al futbol",
    completed: false,
    cancel: false
  }, {
    id: window.crypto.randomUUID(),
    name: "Aprender alemán",
    description:"Hacer mis lecciones de aleman en Bussuu",
    completed: false,
    cancel: false
  }, {
    id: window.crypto.randomUUID(),
    name: "Hacer tarea",
    description:"Terminar la tarea de programacion con React",
    completed: false,
    cancel: false
  }
];
/* 
console.log(listToDo) */

const TodoItem = ({ searchValue, onComplete, onDelete, Itemcompleted, nameTodo, todoCancel, description }) => {
  
  const searchToDo = searchValue.toLowerCase();

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
        className={!todoCancel ? "icon-closed" : "inactive"} 
        onClick={onDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </div>
        <div className="list__description inactive">
          <p>{description}</p>
        </div>
      </ul>
    </>
  );
}

export {TodoItem , listToDo };