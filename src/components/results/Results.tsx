import React from 'react';
import { Link } from 'react-router-dom';
import './Results.css';

const Results = () => {
  return (
    <table className='dashboard__table'>
    <thead className='dashboard__thead'>
        <tr className='dashboard__tr'>
            <th>Fecha de medición</th>
            <th>ID</th>
            <th>Nombre</th>
            <th>Peso</th>
            <th>Altura</th>
            <th>Edad</th>
            <th>Género</th>
            <th>¿Eres Fumador?</th>
            <th>¿Tómas medicación para la tensión?</th>
            <th>¿Erés Diabético?</th>
        </tr>
    </thead>
    <tbody className='dashboard__body'>
    <tr className='dashboard__tr'>
                    <td>05/05/2022</td>
                    <td>1</td>
                    <td>Susana</td>
                    <td>60Kg</td>
                    <td>1.77</td>
                    <td>24</td>
                    <td>Femenino</td>
                    <td>NO</td>
                    <td>NO</td>
                    <td>SI</td>
                    <td>
                        <Link to='/health'>
                        <button className='dashboard__btn'>
                            VER MEDICIÓN
                        </button>
                        </Link>
                    </td>
                </tr>
                
        {/* {
            citas.map(cita => (
                <tr key={cita.id}>
                    <td>{cita.nombre}</td>
                    <td>{cita.fecha}</td>
                    <td>{cita.hora}</td>
                    <td>{cita.sintomas}</td>
                    <td>
                        <button onClick={() => console.log(cita.id)} className='btn btn-warning'>Eliminar</button>
                    </td>
                </tr>
            ))
        } */}
    </tbody>
</table>
  )
}

export default Results