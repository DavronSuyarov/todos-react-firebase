import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplate: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplate: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer fles items-center`,
};

const Todo = ({ todo, toggleComplate, deleteTodo }) => {
  return (
    <li className={todo.completed ? style.liComplate : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplate(todo)}
          type='checkbox'
          checked={todo.completed ? 'checked' : ''}
        />
        <p
          onClick={() => toggleComplate(todo)}
          className={todo.completed ? style.textComplate : style.text}
        >
          {todo.text}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>{<FaRegTrashAlt />}</button>
    </li>
  );
};

export default Todo;
