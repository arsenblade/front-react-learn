import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { authRoutes, publicRoutes } from './Routes'

const AppRouter = () => {
  const {user} = useAuth()
 
  return (
    <Routes>
      {publicRoutes.map(({path, Component}) => <Route key={path} path={path} element={< Component/>} />)}
      {user && authRoutes.map(route => <Route key={route.path} path={route.path} element={<route.Component />}/>)}
    </Routes>
  )
}

export default AppRouter