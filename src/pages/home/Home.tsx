import React from 'react'
import Dashboard from '../../containers/dashboard/Dashboard'

//Styles
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
        <div className='home__container'>
          <Dashboard />
        </div>
    </div>
  )
}

export default Home