import React, { useEffect } from 'react'
import { Outlet, useMatches, useNavigate } from 'react-router-dom'

const BlankLayout = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default BlankLayout
