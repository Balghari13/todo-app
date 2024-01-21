import React from 'react'

const Welcome = ({todoItem}) => {
  return (
    <div>
      {todoItem.length===0 && <h3>Welcome</h3>}
    </div>
  )
}

export default Welcome