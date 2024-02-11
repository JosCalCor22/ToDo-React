/* Hooks */
import { useState, useEffect } from "react";

/* Components */
import { SectionAddTodo } from "./ButtonIcon";
import { HeaderTodo } from "./HeaderTodo";
import { TodoItem } from "./ItemTodo";
import { listToDo } from "./ItemTodo";
import "../styles/App.css";

function setInitialState (key) {
  const getLocalItem = localStorage.getItem(key);
  
  if(!getLocalItem){
    const createLocalItem = localStorage.setItem(key, JSON.stringify(listToDo));
    const parsedItem = JSON.parse(createLocalItem);
    return parsedItem;
  } else{
    return JSON.parse(getLocalItem);
  }
}

function useLocalStorage() {
  const [ items, setItems ] = useState([]);

  /* Save Items ToDo in LocalStorage */
  const todoSave = (newItem) => {
    localStorage.setItem('TODO_V1', JSON.stringify(newItem));
    setItems(newItem);
  }

  return [ items, todoSave ];
}

const App = () => {
  /* Header States */
  const [ groupTodo, todoSave ] = useLocalStorage(); ;

  /* ItemTodo States */
  const[ searchValue, setSearchValue ] = useState("");

  useEffect(
    () => {todoSave(setInitialState('TODO_V1'));},[]
  );

  /* Filter Function */
  const searchToDo = searchValue.toLowerCase();
  const filterMode = groupTodo.filter( task => task.name.toLowerCase().includes(searchToDo));

  const todoCompleted = groupTodo.filter(todo => !!todo.completed).length;

  /* Complete and Delete items ToDo */
  const todoComplete = (id) => {
    const todoIndex = groupTodo.findIndex(todo => todo.id === id);
    const newTodo = [...groupTodo];
    newTodo[todoIndex].completed = true;

    todoSave(newTodo);
  }

  const todoDelete = (id) => {
    const deleteFilter = groupTodo.filter((item) => item.id !== id);

    todoSave(deleteFilter);
  }

  return (
    <>
      <main className="App">
        <section className="todoApp">
          <HeaderTodo 
          setSearchValue = {setSearchValue} 
          searchValue = {searchValue}
          completed = {todoCompleted}
          numberTodo = {groupTodo.length}
          ToDo = {groupTodo}
          />
          <div>
            { searchValue ? filterMode.map((todo) => (
              <TodoItem 
              key={todo.id}
              nameTodo={todo.name}
              todoCancel={todo.cancel}
              searchValue = {searchValue}
              description={todo.description}
              Itemcompleted={todo.completed}
              onDelete={() => todoDelete(todo.id)}
              onComplete={() => todoComplete(todo.id)}
            />
            ))
            :
            groupTodo.map((todo) => (
              <TodoItem 
                key={todo.id}
                nameTodo={todo.name}
                todoCancel={todo.cancel}
                searchValue = {searchValue}
                description={todo.description}
                Itemcompleted={todo.completed}
                onDelete={() => todoDelete(todo.id)}
                onComplete={() => todoComplete(todo.id)}
              />
            ))
            }
          </div>
        </section>
        <section className="addTodo">
          <SectionAddTodo />
        </section>
      </main>
    </>
  );
}

export default App;
