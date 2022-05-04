import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import Home from '../pages/home/Home'
import Measurements from '../pages/measurements/Measurements'
import Settings from '../pages/settings/Settings'

const DashboardRoutes = () => {
  return (
    <div style={{display: 'flex'}}>
    <Sidebar />
    <div style={{width: '100%'}}>
    <Header />
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/measurements' element={<Measurements />}/>
        <Route path='/settings' element={<Settings />}/>
    </Routes>
    </div>
    </div>
  )
}

export default DashboardRoutes