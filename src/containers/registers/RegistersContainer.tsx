import React from 'react'

const RegistersContainer = ({isAuth}: any) => {
  return isAuth ?<div>RegistersContainer</div> : <h2>Not Register</h2>
}

export default RegistersContainer