import React from 'react';
import Results from '../../components/results/Results';

// Styles
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard__container'>
      <div>
           <Results />
    </div>
      </div>
    </div>
  )
}

export default Dashboard