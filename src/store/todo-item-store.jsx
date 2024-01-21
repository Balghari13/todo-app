import { createContext } from 'react';
import { useReducer } from 'react'
export const TodoItemContext = createContext({
  todoItems: [],
  addBtn: ()=>{},
  delBtn:()=>{}
});

const todoItemReducer = (currValue, action) =>{
  let newTodoItem = currValue
 if(action.type==='NEW_ITEM'){
  newTodoItem=[
    ...currValue, {
      name:action.payload.name, 
      date:action.payload.date
    }
  ]
 }else if(action.type==='DEL_ITEM'){
    newTodoItem = currValue.filter((item)=> item.name!=action.payload.itemName)
 }
 return newTodoItem
}


const TodoItemsContextProvider = ({children}) => {
    //const [todoItems, setTodoItems] = useState([])
    const [todoItems, dispatchItem]= useReducer(todoItemReducer,[])
    
    // const addBtn = (name,date) =>{
    //   const newItems = [...todoItems, {
    //     name:name, date:date
    //   }]
    //   setTodoItems(newItems)
    // }
  
    //better way to write spread operator called functional update
    const addBtn =(name,date)=>{
      const newItemAction = {
        type: 'NEW_ITEM',
        payload:{
          name,date
        }
      } 
      dispatchItem(newItemAction)
    }
    const delBtn = (todoItemName) =>{
     // console.log('delet');
      // const newItem = todoItems.filter((item)=>item.name != todoName)
      // setTodoItems(newItem)
      const delItemAction = {
        type: 'DEL_ITEM',
        payload: {
          itemName:todoItemName
        }
      }
      dispatchItem(delItemAction)
    }

    return(
      <TodoItemContext.Provider
      value={{
        todoItems,
        addBtn,
        delBtn
      }}
      >
        {children}
      </TodoItemContext.Provider>
    )
    
}

export default TodoItemsContextProvider