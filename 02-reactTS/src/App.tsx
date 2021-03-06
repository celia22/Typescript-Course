import React, { useState } from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model'

const App: React.FC = () => {
  
 // const [ todos, setTodos ] = useState<{id: string, text: string}[]>([]); SE PUEDE DEFINIR AQUI 
 // O HACERLO ASI

 const [ todos, setTodos ] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos,
      {id: Date.now().toString(), text: text, isEdit:false}
    ]);
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevState) => {
      return prevState.filter(x => x.id !== todoId)
    });
  };
 
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos} onDelete={deleteTodoHandler} /> 
    </div>
  );
};

export default App;
