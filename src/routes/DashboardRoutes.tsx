import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import Health from '../pages/health/Health'
import Home from '../pages/home/Home'
import Measurements from '../pages/measurements/Measurements'
import Settings from '../pages/settings/Settings'

const DashboardRoutes = () => {
  return (
    <div style={{display: 'flex'}}>
    <Sidebar />
    <div style={{width: '100%'}}>
    <Routes>
        {/* Dashboard */}
        <Route path='/' element={<Home />}/>
        <Route path='/measurements' element={<Measurements />}/>
        <Route path='/settings' element={<Settings />}/>
        {/* Dashboard */}
        <Route path='/health' element={<Health />}/>
    </Routes>
    </div>
    </div>
  )
}

export default DashboardRoutes