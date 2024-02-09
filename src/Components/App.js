/* Hooks */
import React from "react";
import { useState } from "react";

/* Components */
import { SectionAddTodo } from "./ButtonIcon";
import { HeaderTodo } from "./HeaderTodo";
import { TodoItem } from "./ItemTodo";
import { listToDo } from "./ItemTodo";
import "../App.css";

const App = () => {
  /* Header States */
  const [ groupTodo, setGroupTodo] = useState(listToDo);
  
  /* ItemTodo States */
  const[ searchValue, setSearchValue ] = useState("");


  const todoCompleted = groupTodo.filter(todo => !!todo.completed).length;
  const todoComplete = (id) => {
    const todoIndex = groupTodo.findIndex(todo => todo.id === id);
    const newTodo = [...groupTodo];
    newTodo[todoIndex].completed = true;

    setGroupTodo(newTodo);
  }

  const todoDelete = (id) => {
    const deleteFilter = groupTodo.filter((item) => item.id !== id);
    return setGroupTodo(deleteFilter);
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
            {
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
