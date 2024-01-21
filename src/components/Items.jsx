import { useContext } from 'react'
import TodoItems from './TodoItems'
import { TodoItemContext } from '../store/todo-item-store'

export const Items = () => {

  const {todoItems} = useContext(TodoItemContext)
 
  return (
    <>
    {todoItems.map((item)=>(
      <TodoItems key={item.name} todoName={item.name} todoDate={item.date} />
    ))}
    </>
  )
}
