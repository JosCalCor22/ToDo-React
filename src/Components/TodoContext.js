/* Hooks */
import { createContext, useState, useEffect } from "react";
import React from "react";

/* Components */
import useLocalStorage from "./UseLocalStorage";
import { listToDo } from "./ItemTodo";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {

  /* Header States */
  const [ groupTodo, todoSave ] = useLocalStorage(); ;

  /* ItemTodo States */
  const[ searchValue, setSearchValue ] = useState("");

  /* Render States */
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(false);

  /* Portal States */
  const [ modal, setModal ] = useState(false);

  useEffect(
    () => {
      setTimeout(() => {
        try{
          function setInitialState (key) {
            const getLocalItem = localStorage.getItem(key);
            
            if(!getLocalItem){
              const createLocalItem = localStorage.setItem(key, JSON.stringify(listToDo));
              const parsedItem = JSON.parse(createLocalItem);
              setError(false);
              return parsedItem;
            } else{
              return JSON.parse(getLocalItem);
            }
          }
  
          todoSave(setInitialState('TODO_V1'));

          setLoading(false);
        } catch(error){
          console.log(error);
          setLoading(false);
          setError(true);
        } 
      }, 2000);
    }, []
  );

  /* Filter Function */
  const searchToDo = searchValue.toLowerCase();
  const filterMode = groupTodo.filter( task => task.name.toLowerCase().includes(searchToDo));

  const todoCompletedFilter = groupTodo.filter(todo => !!todo.completed).length;

  /* Complete and Delete items ToDo */
  const todoComplete = (id) => {
    const todoIndex = groupTodo.findIndex(todo => todo.id === id);
    const newTodo = [...groupTodo];
    newTodo[todoIndex].completed = true;

    todoSave(newTodo);
  }

  const addTodo = (text, description) => {
    const newTodo = [...groupTodo];
    newTodo.push({
      id: newTodo.length + 1,
      name: text,
      description: description,
      completed: false,
    }); 

    todoSave(newTodo);
  }

  const todoDelete = (id) => {
    const deleteFilter = groupTodo.filter((item) => item.id !== id);

    todoSave(deleteFilter);
  }

  return (
    <TodoContext.Provider value={{
        error,
        modal,
        addTodo,
        loading,
        setModal,
        groupTodo,
        todoDelete,
        filterMode,
        searchValue,
        todoComplete,
        setSearchValue,
        todoCompletedFilter,
      }}>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }