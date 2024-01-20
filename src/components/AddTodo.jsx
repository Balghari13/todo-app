import React, { useState } from 'react'


export const AddTodo = ({addBtn}) => {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  
  const handleAdd =()=>{
    addBtn(name,date)
    setDate('')
    setName('')
  }
  return (
    <div className='row'>
    <input type="text" className='col-6' value={name} onChange={(e)=>setName(e.target.value)} />
    <input type='date' className='col-4' value={date} onChange={(e)=>setDate(e.target.value)} />
    <button className='col-2 btn btn-success'
    onClick={handleAdd}
    >Add</button>
    </div>
  )
}
