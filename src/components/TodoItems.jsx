import React, { useContext } from 'react'
import { TodoItemContext } from '../store/todo-item-store'

const TodoItems = ({todoName,todoDate}) => {
  const {delBtn} = useContext(TodoItemContext)
  return (
    <>
    <div className='container row mt-3'>
      <div className='col-6'>{todoName}</div>
      <div className='col-4'>{todoDate}</div>
      
      <button className='btn btn-danger col-2'
      onClick={()=>delBtn(todoName)}
      >delete</button>
    </div>
    </>
  )
}

export default TodoItems