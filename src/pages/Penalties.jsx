import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AddPenalty() {
  const [penalties, setPenalties] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/penalties')
      .then((res) => {
        setPenalties(res.data);
      });
  }, []);
  const d=new Date();
  const formattedDate = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
  return (
    <div>
      <h1 className='text-4xl m-4 p-2'>Penalties Collected Today On {formattedDate}</h1>
      <div className="outercontainer flex flex-col p-5 w-[90%] ">
      {penalties.map((p, index) => {
        const color = p.penalty === "No Parking" ? "red" : "yellow";
        const vehicle = p.v_type === "car"
          ? "https://icones.pro/wp-content/uploads/2021/03/icone-de-voiture-symbole-png-bleue.png"
          : "https://png.pngtree.com/png-clipart/20230804/original/pngtree-motorbike-blue-motorcycle-tire-america-vector-picture-image_9614797.png";

        return (
          <div key={index} className='flex h-45 w-[90%] p-3 m-2 bg-slate-300  rounded flex-wrap'>
            <div className={`h-90% w-[50%] bg-${color}-300 flex justify-center items-center`}>
              <img src={vehicle} alt='alt' className='w-20 m-5' />
            </div>
            <div className='flex flex-col text-2xl md:text-3xl ml-5'>
              <p className='text-[25px] p-3'>Car No: {p.v_no}</p>
              <p className='text-[25px] p-3'>Charges: {p.penalty}</p>
              <p className='text-[25px] p-3'>Time of seizing: {p.time}</p>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}
