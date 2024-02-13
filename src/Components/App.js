/* Components */
import "../styles/App.css";
import { TodoItem } from "./ItemTodo";
import { HeaderTodo } from "./HeaderTodo";
import { SectionAddTodo } from "./ButtonIcon";
import { LoadingComponent } from "./LoadingComponent";
import { TodoContext, TodoProvider } from "./TodoContext";

const App = () => {
  return (
    <>
      <TodoProvider>
        <main className="App">
          <section className="todoApp">
            <HeaderTodo />
            <TodoContext.Consumer>
              {({
                error,
                loading,
                groupTodo,
                filterMode,
                todoDelete,
                searchValue,
                todoComplete
              }) => (
                <div>
                  {
                    loading ? 
                      <LoadingComponent />
                    : error ?
                      <ul>
                        <p>Hubo un error, recaga la pagina por favor</p>
                      </ul>
                    : !loading && groupTodo.length === 0 ?
                      <ul>
                        <p>Crea tu primer ToDo!!</p>
                      </ul>
                    :  
                      null
                  }

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
                      error = {error}
                      loading = {loading}
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
              )}
            </TodoContext.Consumer>
          </section>
          <section className="addTodo">
            <SectionAddTodo />
          </section>
        </main>
      </TodoProvider>
    </>
  );
}

export default App;
