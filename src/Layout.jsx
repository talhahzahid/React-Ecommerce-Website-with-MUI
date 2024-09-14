
import React from 'react'
import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from './Components/Navbar'

const Layout = () => {
  return (
    <>
    <ResponsiveAppBar/>
    <Outlet />
    </>
  )
}

export default Layout
