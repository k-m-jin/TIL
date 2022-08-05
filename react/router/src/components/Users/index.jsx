import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

function Users() {
  const location = useLocation()

  return (
    <div>
      <p>Users</p>
      {location.state && location.state.data}
      <Outlet />
    </div>
  )
}

export default Users
