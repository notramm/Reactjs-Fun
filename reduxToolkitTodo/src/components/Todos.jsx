import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();


  return (
    <>
        <ul className='list-none flex flex-col justify-center mx-20 p-4 max-w-md mx-auto'>
        {todos.map((todo) => (
          <li key= {todo.id}
          className='mt-4 flex justify-between items-center bg-purple-600 px-4 py-2 rounded text-lg shadow-md hover:bg-purple-700 transition-colors duration-200'>
          <div className='text-white'>{todo.text}</div>
          <button onClick={() => dispatch(removeTodo(todo.id))}
          className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 transition-colors duration-200 cursor-pointer text-white bg-red-500 hover:bg-red-600'>
            &#10005;
          </button>
          </li>
        ))}
        </ul>
        
    </>
  )
}

export default Todos