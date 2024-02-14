import closeIcon from '../assets/svg/closeIcon.svg';
import completeIcon from '../assets/svg/completeIcon.svg';

const listToDo = [
  {
    id: window.crypto.randomUUID(),
    name: "Crear tu primer ToDo",
    description:"Elimina este ToDo de prueba y crea el tuyo",
    completed: false,
    cancel: false
  }
];

/* const cancelToDo = [
]

const completedToDo = [
  
] */

const TodoItem = ({ onComplete, onDelete, Itemcompleted, nameTodo, todoCancel, description }) => {

  return (
    <>
      <ul className={Itemcompleted ? 'listCompleted' : todoCancel ? 'inactive' : 'list'}>
        <div
        className={!Itemcompleted ? "icon icon-check" : "inactive"} 
        onClick={onComplete}>
          <img src={completeIcon} alt="Complete ToDo" />
        </div>
        <li>{ nameTodo }</li>
        <div 
        className={!todoCancel && !Itemcompleted ? "icon icon-closed" : "inactive"} 
        onClick={onDelete}>
          <img src={closeIcon} alt="Delete ToDo" />
        </div>
        <div className="list__description">
          <p>{description}</p>
        </div>
      </ul>
    </>
  );
}

export {TodoItem , listToDo };