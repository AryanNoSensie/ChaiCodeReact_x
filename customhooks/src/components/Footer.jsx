import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Footer = () => {

    const name = useContext(AppContext);
  return (
    <div>
      <h2>Footer</h2>
      <h1>name :{name} </h1>
    </div>
  )
}

export default Footer
