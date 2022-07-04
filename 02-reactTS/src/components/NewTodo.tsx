import React, {useRef} from "react";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
 
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHanlder = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText)
  }

  return (
    <form onSubmit={todoSubmitHanlder}>
      <label htmlFor="todo-text"> Todo Text</label>
      <input type="text" id="todo-text" ref={textInputRef}/>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
