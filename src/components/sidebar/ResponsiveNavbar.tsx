import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import homeIcon from '../../assets/dashboard.png';
// Styles
import './ResponsiveNavbar.css';

const ResponsiveNavbar = (props:any) => {
  const [currentLink, setCurrentLink] = useState(1);
  return (
    <div className='nav'>
         <ul>
                    <li onClick={() => setCurrentLink(1)}  className={currentLink === 1 ? "active" : ""}>
                        <Link to='/'>
                        <img className='sidebar__icon' src={homeIcon} alt='Icon'/>
                        <span>Home</span>

                        </Link>
                    </li>
                    <li onClick={() => setCurrentLink(2)}  className={currentLink === 2 ? "active" : ""}>
                        <Link to='/measurements'>
                        <img className='sidebar__icon' src={homeIcon} alt='Icon'/>
                        <span>Measurements</span>

                        </Link>         
                    </li>
                    <li onClick={() => setCurrentLink(3)}  className={currentLink === 3 ? "active" : ""}>
                     <Link to='/settings'>
                        <img className='sidebar__icon' src={homeIcon} alt='Icon'/>
                            <span>Settings</span>
                        </Link>
                    </li>
                </ul>
    </div>
  )
}

export default ResponsiveNavbar