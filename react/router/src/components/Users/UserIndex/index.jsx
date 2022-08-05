import React from 'react'
import { Link } from 'react-router-dom'
import { userData } from '../../../constants/userData'

function UserIndex() {
  return (
    <div>
      {userData.map((user) => (
        <Link to={`/users/${user.id}`}>
          <p>{user.name}</p>
        </Link>
      ))}
    </div>
  )
}

export default UserIndex
