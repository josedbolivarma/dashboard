import React, { useState } from 'react'
import { Link } from 'react-router-dom';
//Styles
import './Sidebar.css';
import logo from '../../assets/logo.png';
import healthIcon from '../../assets/health.png';
import homeIcon from '../../assets/home.png';
import metricsIcon from '../../assets/metrics.png';
import settingsIcon from '../../assets/settings.png';

const Sidebar = () => {
  const [currentLink, setCurrentLink] = useState<Number>(1);

  return (
    <>
    <div className='sidebar'>
        <div className="sidebar__top">
            <div className='sidebar__brand'>
                <img className='sidebar__icon' src={logo} alt='Icon'/>
                <span>Zoom</span>

            </div>
            <div className='sidebar__toggle'>

            </div>
            <div className='sidebar__links'>
                <ul>
                        <Link onClick={() => setCurrentLink(1)} className='sidebar__link' to='/'>
                    <li>
                        <img className='sidebar__icon' src={homeIcon} alt='Icon'/>
                        <span className={currentLink === 1 ? "active" : ""}>Inicio</span>

                    </li>
                        </Link>
                        <Link onClick={() => setCurrentLink(2)} className='sidebar__link' to='/measurements'>
                    <li>
                        <img className='sidebar__icon' src={metricsIcon} alt='Icon'/>
                        <span  className={currentLink === 2 ? "active" : ""}>Mediciones</span>

                    </li>
                        </Link>         
                     <Link onClick={() => setCurrentLink(3)}   className='sidebar__link' to='/settings'>
                    <li>
                        <img className='sidebar__icon' src={settingsIcon} alt='Icon'/>
                            <span  className={currentLink === 3 ? "active" : ""}>Configuraciones</span>
                    </li>
                        </Link>
                </ul>
            </div>
            <div className='sidebar__logout'>
            <a href="#">
                <span className='logout'>Salir</span>
            </a>
        </div>
        </div>

        
    </div>


  </>
  )
}

export default Sidebar