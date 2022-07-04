import React, { useEffect, useState } from "react";
import EditTodo from "./EditTodo";
import { Todo } from "../todo.model";

interface TodoListProps {
  items: { id: string; text: string; isEdit: boolean }[];
  onDelete: (item: string) => void;
  // onEdit: (text: string, id: string, index: number) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  console.log(props);
  const itemsArr = props.items;
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    setTodos(itemsArr);
  }, [itemsArr]);

  const setEdit = (todo: Todo, index: number) => {
    return (event: React.MouseEvent) => {
      event.preventDefault();

      let isEditTodo = { ...todo, isEdit: true };

      const newTodos = [...todos];
      newTodos[index] = isEditTodo;
      setTodos(newTodos);
    };
  };

  const editTodoHandler = (text: string, id: string) => {
    const newTodos = [...todos];
    newTodos.map((item) => {
      if(item.id === id){
        item.text = text
        item.isEdit = false;
      }
    })
    setTodos(newTodos)
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <div key={todo.id}>
          <li>{todo.text}</li>
          <button onClick={props.onDelete.bind(null, todo.id)}>
            Delete Me
          </button>
          <button onClick={setEdit(todo, index)}>Edit Me</button>
          {todo.isEdit && <EditTodo onEdit={editTodoHandler} todo={todo} />}
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
