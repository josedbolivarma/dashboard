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