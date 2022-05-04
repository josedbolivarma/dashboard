import React, { useState } from 'react'

//Styles
import './Header.css';
import homeIcon from '../../assets/dashboard.png';
import { Link } from 'react-router-dom';

const Header = () => {
const [showNavbar, setShowNavbar] = useState<any>(false); 
const [currentLink, setCurrentLink] = useState<Number>(1);

  return (
      <div>
    <div className='header'> 
        <div className='header__container'>
            <div className='header__title'>
            <h4 className='header__titleUser'>Hi José,</h4>
            <h2 className='header__titleSection'>Welcome to <span>Dashboard</span></h2>
            </div>
        <div className='header__search'>
            <img className='header__logo' src={homeIcon} alt='Icon'/>
            <input className='header__searchInput' type="text" placeholder='Search' />
        </div>
        <button onClick={() => setShowNavbar(true)} className='responsive__icon'>MENU</button>
        </div>
        



    </div>





        
    <div className='nav' style={{
         right: showNavbar ? "0vw" : "-100vw"
    }}>
    <button onClick={() => setShowNavbar(false)}>X</button>
    <div >
        <div className='responsive__links'>
         <ul>
                    <li onClick={() => setCurrentLink(1)}  className={currentLink === 1 ? "active" : ""}>
                        <Link to='/'>
                        <img className='sidebar__icon' src={homeIcon} alt='Icon'/>
                        <b>Home</b>

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
    </div>


    </div>
  )
}

export default Header