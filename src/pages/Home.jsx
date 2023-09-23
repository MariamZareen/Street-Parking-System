import React from 'react'
import Navbar from './Navbar'

<Navbar/>
export default function Home() {
  return (
    <div>
      <h1 className='m-10 text-4xl'>Welcome to Admin Dashboard</h1>
      <div className='flex md:flex-row flex-wrap flex-col h-[300px] w-[90%] m-auto  '>

        <div className='flex flex-col m-5 p-5 rounded h-[250px] w-[40%] bg-slate-300 justify-around align-item-center'>
            <div className='flex justify-around align-center'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/No_parking.svg/2048px-No_parking.svg.png" alt="" className='h-25 w-20 m-5' />
            <p className='text-center text-6xl mt-5'>30</p>
            </div>
            <p className='text-xl md:2xl w-[90%] text-center'>Number of vehicles found in no parking areas <br /></p>
        </div>

        <div className='flex flex-col m-5 p-5 rounded h-[250px] w-[40%] bg-slate-300 justify-around align-item-center'>
            <div className='flex justify-around align-center '>
            <img src="https://www.manutan.co.uk/img/S/GRP/ST/AIG3606699.jpg" alt="" className='h-25 w-20 m-5' />
            <p className='text-center text-6xl mt-5'>19</p>
            </div>
            <p className='text-xl md:2xl w-[90%] text-center'>Number of vehicles found on one way road<br /></p>
        </div>

        <div className='flex flex-col m-5 p-5 rounded h-[250px] w-[40%] bg-slate-300 justify-around align-item-center'>
            <div className='flex justify-around align-center '>
            <img src="https://icones.pro/wp-content/uploads/2021/03/icone-de-voiture-symbole-png-bleue.png" alt="" className='h-25 w-20 m-5' />
            <p className='text-center text-6xl mt-5'>25</p>
            </div>
            <p className='text-xl md:2xl w-[90%] text-center'><br />Number of vehicles that were seized from no parking area</p>
        </div>
     
        <div className='flex flex-col m-5 p-5 rounded h-[250px] w-[40%] bg-slate-300 justify-around align-item-center'>
            <div className='flex justify-around align-center '>
            <img src="https://img.favpng.com/25/5/18/portable-network-graphics-clip-art-computer-icons-transparency-money-png-favpng-aghUi18P3wjjh6wm7X2EWe0zY.jpg" alt="" className='h-25 w-20 m-5' />
            <p className='text-center text-6xl mt-5'>1600</p>
            </div>
            <p className='text-xl md:2xl text-center w-[90%]'>Total fine collected<br /></p>
        </div>
         
      </div>
      <div className='h-[900px]'></div>

    </div>
  )
}
