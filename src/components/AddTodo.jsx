import React, { useRef, useState } from 'react'


export const AddTodo = ({addBtn}) => {
  // const [name, setName] = useState('')
  // const [date, setDate] = useState('')
  const name = useRef();
  const date = useRef();
  
  const handleAdd =()=>{
   const todoName = name.current.value
   const todoDate = date.current.value
    addBtn(todoName,todoDate)
    name.current.value=''
    date.current.value=''
    // setDate('')
    // setName('')
  }
  return (
    <div className='row'>
    <input type="text" className='col-6'
    ref={name}
    //don't need value and onchange when use useref
   // value={name} onChange={(e)=>setName(e.target.value)}
      />
    <input type='date' className='col-4' 
    ref={date}
   // value={date} onChange={(e)=>setDate(e.target.value)}
     />
    <button className='col-2 btn btn-success'
    onClick={handleAdd}
    >Add</button>
    </div>
  )
}
