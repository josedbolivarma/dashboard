import React from 'react'
import Dashboard from '../../containers/dashboard/Dashboard'

// Styles
import './Measurements.css'

const Measurements = () => {
  return (
    <div className='measurements'>
        <div className='measurements__container'>
          <Dashboard />
        </div>
    </div>
  )
}

export default Measurements