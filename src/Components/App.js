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

  const [ groupTodo, setGroupTodo] = useState(listToDo);
  const[ searchValue, setSearchValue ] = useState("");

  const todoCompleted = groupTodo.filter(todo => !!todo.completed).length;
  const numberTodo = groupTodo.length;
  const ToDo = groupTodo;

  return (
    <>
      <main className="App">
        <section className="todoApp">
          <HeaderTodo 
          setSearchValue = {setSearchValue} 
          searchValue={searchValue}
          completed={todoCompleted}
          numberTodo={numberTodo}
          ToDo = {ToDo}
          />
          <div>
            <TodoItem 
            searchValue={searchValue}/>
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
