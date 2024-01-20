import React from 'react'
import TodoItems from './TodoItems'

export const Items = ({todo, delBtn}) => {
  return (
    <>
    {todo.map((item)=>(
      <TodoItems key={item.name} todoName={item.name} todoDate={item.date} delBtn={delBtn}/>
    ))}
    </>
  )
}
