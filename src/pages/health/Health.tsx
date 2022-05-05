import React from 'react'
//Styles
import Header from '../../components/header/Header'
import './Health.css';
import avatarIcon from '../../assets/Icons/indicegeneral.png';
import bpDiastolicIcon from '../../assets/Icons/bpdiastolic72.png';
import bpSystolicIcon from '../../assets/Icons/bpsystolic72.png';
import hrbpmIcon from '../../assets/Icons/hrbpm72.png';
import msiIcon from '../../assets/Icons/msi72.png';
import brbpmIcon from '../../assets/Icons/brbpm72.png';
import bpcvdIcon from '../../assets/Icons/bpcvd72.png';
import acvIcon from '../../assets/Icons/bpstroke72.png';
import rcIcon from '../../assets/Icons/bpcvd72.png';

const Health = () => {
  return (
    <div>
        <Header />
        <div className='health__container'>
        <img className='health__icon' src={avatarIcon} alt='Avatar Icon'/>    
        <h3>ÍNDICE GENERAL DE SALUD</h3> 
        <div className='health__content'>
            <div className='health__segments'>
                <div className='health__segmentBox' />
                <div className='health__segmentBox' />
                <div className='health__segmentBox' />
                <div className='health__segmentBox' />
                <div className='health__segmentBox' />
            </div>
            <h4 className='health__segmentPrincipal'><b>78</b></h4>
            <div className='health__contentBox'>
            <div className='health__boxTitle'>
            <img className='health__icon' src={bpDiastolicIcon} alt='Avatar Icon'/>    
            <h4>PRESIÓN ARTERIAL DIASTÓLICA</h4>
            </div>
            <div className='health__segmentBoxSecondary' />

            </div>
            
            <div className='health__contentBox'>
            <div className='health__boxTitle'>
            <img className='health__icon' src={bpSystolicIcon} alt='Avatar Icon'/>    
            <h4>PRESIÓN ARTERIAL SISTÓLICA</h4>
            </div>
            <div className='health__segmentBoxSecondary' />

            </div>

            <div className='health__contentBox'>
            <div className='health__boxTitle'>
            <img className='health__icon' src={hrbpmIcon} alt='Avatar Icon'/>    
            <h4>FRECUENCIA CARDÍACA</h4>
            </div>
            <div className='health__segmentBoxSecondary' />

            </div>

            <div className='health__contentBox'>
            <div className='health__boxTitle'>
            <img className='health__icon' src={msiIcon} alt='Avatar Icon'/>    
            <h4>ÍNDICE DE MASA CORPORAL</h4>
            </div>
            <div className='health__segmentBoxSecondary' />

            </div>

            <div className='health__contentBox'>
            <div className='health__boxTitle'>
            <img className='health__icon' src={brbpmIcon} alt='Avatar Icon'/>    
            <h4>FRECUENCIA RESPIRATORIA</h4>
            </div>
            <div className='health__segmentBoxSecondary' />

            </div>

            <div className='health__contentBox'>
            <div className='health__boxTitle'>
            <img className='health__icon' src={acvIcon} alt='Avatar Icon'/>    
            <h4>NIVEL DE ESTRÉS</h4>
            </div>
            <div className='health__segmentBoxSecondary' />

            </div>

            <div className='health__contentBox'>
            <div className='health__boxTitle'>
            <img className='health__icon' src={bpcvdIcon} alt='Avatar Icon'/>    
            <h4>RIESGO DE INFARTO</h4>
            </div>
            <div className='health__segmentBoxSecondary' />

            </div>

            <div className='health__contentBox'>
            <div className='health__boxTitle'>
            <img className='health__icon' src={acvIcon} alt='Avatar Icon'/>    
            <h4>RIESGO DE ACV</h4>
            </div>
            <div className='health__segmentBoxSecondary' />

            </div>

            <div className='health__contentBox'>
            <div className='health__boxTitle'>
            <img className='health__icon' src={rcIcon} alt='Avatar Icon'/>    
            <h4>RIESGO CARDIOVASCULAR</h4>
            </div>
            <div className='health__segmentBoxSecondary' />

            </div>
            <button className='health__btn'>REPETIR MEDICIÓN</button>

        </div>       
        </div>
    </div>
  )
}

export default Health