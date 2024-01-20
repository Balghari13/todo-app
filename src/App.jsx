
import { useState } from 'react'
import './App.css'
import { AddTodo } from './components/AddTodo'
import { Items } from './components/Items'

function App() {

  const [todoItems, setTodoItems] = useState([])
    
  const addBtn = (name,date) =>{
    const newItems = [...todoItems, {
      name:name, date:date
    }]
    setTodoItems(newItems)
  }
  const delBtn = (todoName) =>{
   // console.log('delet');
    const newItem = todoItems.filter((item)=>item.name != todoName)
    setTodoItems(newItem)
  }
  return (
    <>
    <h2>Todo Items</h2>
     <AddTodo addBtn={addBtn}/>
     <Items todo={todoItems} delBtn={delBtn}/>
    </>
  )
}

export default App
