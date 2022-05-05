import React from 'react';

// Styles
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard__container'>
      <div>
        <h2 className='dashboard__title'>AGENDA</h2>
            <table className='dashboard__table'>
                <thead className='dashboard__thead'>
                    <tr className='dashboard__tr'>
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
                                <td>Susana</td>
                                <td>2022</td>
                                <td>Normal</td>
                                <td>Fiebre</td>
                                <td>Fiebre</td>
                                <td>Fiebre</td>
                                <td>Fiebre</td>
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
    </div>
      </div>
    </div>
  )
}

export default Dashboard