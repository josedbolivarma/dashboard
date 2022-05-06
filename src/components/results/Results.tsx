import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Results.css';

const initialState = [
    {   
        fecha: '05/05/2022',
        id: 1,
        nombre: 'Norman',
        peso: '68KG',
        altura: '170',
        edad: 0,
        genero: 'Hombre',
        fuma: 'NO',
        medica: 'NO',
        diabetico: 'SI'
    },
    {   
        fecha: '05/05/2022',
        id: 2,
        nombre: 'Manuel',
        peso: '68KG',
        altura: '170',
        edad: 0,
        genero: 'Hombre',
        fuma: 'NO',
        medica: 'NO',
        diabetico: 'SI'
    },
    {   
        fecha: '05/05/2022',
        id: 3,
        nombre: 'Isabella',
        peso: '68KG',
        altura: '170',
        edad: 0,
        genero: 'Hombre',
        fuma: 'NO',
        medica: 'NO',
        diabetico: 'SI'
    },
]

const Results = () => {
  const [filtrado, setFiltrado] = useState(initialState);
  const [filtradoProductos, setFiltradoProductos] = useState(initialState);

  const { products } = useSelector((store: any) => store.products);
  console.log(products, 'FILTRADO EN RESULTS');

  useEffect(() => {
    const filtradoTotal = filtrado.filter((item: any) => item.nombre.toLocaleLowerCase().includes(products.toLocaleLowerCase()));
    setFiltradoProductos(filtradoTotal);
  }, [products])
  
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
    {

        
    filtradoProductos.map((item) => (
            <tr key={item.id} className='dashboard__tr'>
                    <td>{ item.fecha}</td>
                    <td>{ item.id }</td>
                    <td>{ item.nombre }</td>
                    <td>{ item.peso }</td>
                    <td>{ item.altura }</td>
                    <td>{ item.edad }</td>
                    <td>{ item.genero }</td>
                    <td>{ item.fuma }</td>
                    <td>{ item.medica }</td>
                    <td>{ item.diabetico }</td>
                    <td>
                        <Link to='/health'>
                        <button className='dashboard__btn'>
                            VER MEDICIÓN
                        </button>
                        </Link>
                    </td>
                </tr> 
        ))
    }

    {/* <tr className='dashboard__tr'>
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
                </tr> */}

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