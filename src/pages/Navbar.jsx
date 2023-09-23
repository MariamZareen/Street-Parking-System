import React from 'react'
import logo from '../govt logo.webp';
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <div className='flex justify-between align-item-center p-8'>
      <img src={logo} alt="" className='h-20 m-5' />
      <ul className='flex text-1xl md:text-2xl md:mr-7 h-1 text-center m-auto'>
        <li className='m-6 p-6 pb-12 hover:bg-sky-300 hover:text-white hover:rounded text-center'><Link to={'/'}>Dashboard</Link></li>
        <li className='m-6 p-6 pb-12 hover:bg-sky-300 hover:text-white hover:rounded text-center'><Link to={'/map'}>Map</Link></li>
        <li className='m-6 p-6 pb-12 hover:bg-sky-300 hover:text-white hover:rounded text-center'><Link to={'/penalties'}>Penalties</Link></li>

      </ul>
    </div>
      <div className='h-1 w-full bg-sky-300 mt-5'></div>
    </>
  )
}
