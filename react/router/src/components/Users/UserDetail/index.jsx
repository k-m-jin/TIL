import React from 'react'
import { useParams } from 'react-router-dom'
import { userData } from '../../../constants/userData'

function UserDetail() {
  const params = useParams()
  const user = userData.find((user) => user.id === parseInt(params.userId))
  return (
    <div>
      {user.name}
      {user.email}
    </div>
  )
}

export default UserDetail
