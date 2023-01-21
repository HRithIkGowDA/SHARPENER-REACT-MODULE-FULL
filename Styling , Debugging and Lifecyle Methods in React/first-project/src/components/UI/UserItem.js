import React from 'react'

const UserItem = (props) => {
  return (
        <div className="p-2 bg-light border">{`Name : ${props.name}    Age :${props.age} --- ${props.college}`}</div>
  )
}

export default UserItem
