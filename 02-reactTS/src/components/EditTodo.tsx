import React, { useRef } from "react";

interface editTodoProps {
  todo: { id: string; text: string };
  onEdit: (text: string, id: string) => void;
}

const EditTodo: React.FC<editTodoProps> = (props) => {
  console.log(props)
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
   props.onEdit(enteredText, props.todo.id);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <label htmlFor="todo-text"> Todo Text</label>
      <input type="text" id="todo-text" ref={textInputRef} />
      <button type="submit"> SAVE EDITED TODO</button>
    </form>
  );
};

export default EditTodo;
