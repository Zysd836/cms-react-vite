import React, { useEffect } from 'react'
import { Outlet, useMatches, useNavigate } from 'react-router-dom'

const BlankLayout = () => {
  const navigate = useNavigate()
  const matches = useMatches()
  useEffect(() => {
    navigate('/login')
  }, [])
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default BlankLayout
