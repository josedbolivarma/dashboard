import React, { useState } from 'react'
import { Link } from 'react-router-dom';
//Styles
import './Sidebar.css';
import homeIcon from '../../assets/dashboard.png';

const Sidebar = () => {
  const [currentLink, setCurrentLink] = useState<Number>(1);

  return (
    <>
    <div className='sidebar'>
        <div className="sidebar__top">
            <div className='sidebar__brand'>
                <img className='sidebar__icon' src={homeIcon} alt='Icon'/>
                <span>Zoom</span>

            </div>
            <div className='sidebar__toggle'>

            </div>
            <div className='sidebar__links'>
                <ul>
                        <Link onClick={() => setCurrentLink(1)} className='sidebar__link' to='/'>
                    <li>
                        <img className='sidebar__icon' src={homeIcon} alt='Icon'/>
                        <span className={currentLink === 1 ? "active" : ""}>Home</span>

                    </li>
                        </Link>
                        <Link onClick={() => setCurrentLink(2)} className='sidebar__link' to='/measurements'>
                    <li>
                        <img className='sidebar__icon' src={homeIcon} alt='Icon'/>
                        <span  className={currentLink === 2 ? "active" : ""}>Measurements</span>

                    </li>
                        </Link>         
                     <Link onClick={() => setCurrentLink(3)}   className='sidebar__link' to='/settings'>
                    <li>
                        <img className='sidebar__icon' src={homeIcon} alt='Icon'/>
                            <span  className={currentLink === 3 ? "active" : ""}>Settings</span>
                    </li>
                        </Link>
                </ul>
            </div>
        </div>

        <div className='sidebar__logout'>
            <a href="#">
                <span className='logout'>Logout</span>
            </a>
        </div>
    </div>


  </>
  )
}

export default Sidebar