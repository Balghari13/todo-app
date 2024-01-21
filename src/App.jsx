
import { useState } from 'react'
import './App.css'
import { AddTodo } from './components/AddTodo'
import { Items } from './components/Items'
import Welcome from './components/Welcome'
import { TodoItemContext } from './store/todo-item-store'


function App() {

  const [todoItems, setTodoItems] = useState([])
    
  // const addBtn = (name,date) =>{
  //   const newItems = [...todoItems, {
  //     name:name, date:date
  //   }]
  //   setTodoItems(newItems)
  // }

  //better way to write spread operator called functional update
  const addBtn =(name,date)=>{
    setTodoItems((currValue)=>[
      ...currValue, {
        name:name, 
        date:date
      }
    ])
  }
  const delBtn = (todoName) =>{
   // console.log('delet');
    const newItem = todoItems.filter((item)=>item.name != todoName)
    setTodoItems(newItem)
  }
  
  return (
    <TodoItemContext.Provider value={{
      todoItems,addBtn,delBtn
    }}>
    <h2>Todo Items</h2>
     <AddTodo />
     <Welcome/>
     <Items />
    </TodoItemContext.Provider>
  )
}

export default App
