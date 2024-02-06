import { HeaderTodo } from "./HeaderTodo";
import { TodoItem } from "./ItemTodo";
/* import { listToDo } from "./ItemTodo"; */
import { SectionAddTodo } from "./ButtonIcon";
import React from "react";
import "../App.css";

const App =() => {

  return (
    <>
      <main className="App">
        <section className="todoApp">
          <HeaderTodo />
          <div>
            <TodoItem />
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
