

import './App.css'
import { AddTodo } from './components/AddTodo'
import { Items } from './components/Items'
import Welcome from './components/Welcome'
import TodoItemsContextProvider from './store/todo-item-store'


function App() {
  return (
    <TodoItemsContextProvider>
    <h2>Todo Items</h2>
     <AddTodo />
     <Welcome/>
     <Items />
    </TodoItemsContextProvider>
  )
}

export default App
