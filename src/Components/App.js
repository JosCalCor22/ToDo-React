/* Components */
import { TodoItem } from "./ItemTodo";
import { SectionModal } from "./Modal";
import { HeaderTodo } from "./HeaderTodo";
import { LoadingComponent } from "./LoadingComponent";
import { TodoContext, TodoProvider } from "./TodoContext";

const App = () => {

  return (
    <>
      <TodoProvider>
        <main className="App">
          <section className="container__todo">
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
                <section className="map__todo">
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
                  )) : (
                    <>
                      <section className="map__todo--uncompleted">
                        {
                          groupTodo.filter((todo) => !todo.cancel && !todo.completed).map((todo) => (
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
                      </section>

                      <section className="map__todo--completed">
                        {
                          groupTodo.filter((todo) => todo.completed).map((todo) => (
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
                      </section>

                      <section className="map__todo--deleted">
                        {
                          groupTodo.filter((todo) => todo.cancel).map((todo) => (
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
                      </section>
                    </>
                  )
                  }
                </section>
              )}
            </TodoContext.Consumer>
          </section>
          <section className="addTodo">
            <TodoContext.Consumer>
              {({ modal }) => (modal ? <SectionModal /> : null)}
            </TodoContext.Consumer>
          </section>
        </main>
      </TodoProvider>
    </>
  );
}

export default App;
