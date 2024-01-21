import React, { useContext } from 'react'
import { TodoItemContext } from '../store/todo-item-store'

const Welcome = () => {
  const {todoItems} = useContext(TodoItemContext)
  
  return (
    <div>
      {todoItems.length===0 && <h3>Welcome</h3>}
    </div>
  )
}

export default Welcome