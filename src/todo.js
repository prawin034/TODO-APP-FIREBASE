import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
const Todo = ({ todo, todocomplete, tododelete }) => {
  return (
    <li className={todo.completed ? 'todo_update' : 'todo_li'}>
      <div className="todo_row">
        <input
          onChange={() => todocomplete(todo)}
          className="todo_checkbox"
          checked={todo.completed ? 'checked' : ''}
          type="checkbox"
        />
        <p onClick={() => todocomplete(todo)} className="todo_p">
          {todo.text}
        </p>
      </div>
      <button onClick={() => tododelete(todo.id)} className="todo_trash">
        <FaRegTrashAlt size={20} />
      </button>
    </li>
  );
};

export default Todo;
