import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Dashboard from '../../containers/dashboard/Dashboard'
import useForm from '../../Hooks/useForm'
import { selectedSync } from '../../redux/actions/actionProducts'

// Styles
import './Measurements.css'

const Measurements = () => {

  const [search, setSearch] = useState('');

  // const [values, handleInputChange, resetForm] = useForm({
  //   searchText: ''
  // })

  // const { searchText } :any= values;

  const dispatch = useDispatch();


  const handleSubmit = (e: any) => {
    e.preventDefault();
    // handleInputChange(e);
    dispatch(selectedSync(search))
    console.log(search);
  }

  // const handleInputChange = (e : any) => {
    
  // }
  

  const handleInputChanged = ({ target }: any): any => {
    setSearch(target.value);
    console.log(target.value);
  }
  
  return (
    <div className='measurements'>
        <div className='measurements__container'>
        <form onSubmit={handleSubmit} className='measurements__search'>
          <img className='measurements__searchIcon' src='https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png' alt='Search Icon'/>
          <input 
          className='measurements__searchInput' 
          type="search" 
          placeholder='Búsca un usuario'
          name="searchText"
          autoComplete="off"
          value={ search || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): any => {
            handleInputChanged(e)
          }}
          />
        </form>
          <Dashboard />
        </div>
    </div>
  )
}

export default Measurements