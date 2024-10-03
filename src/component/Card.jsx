import React from 'react'
import { BiX } from "react-icons/bi";

const Card = ({tasks}) => {
  return (
    <>
      {
        tasks.map((task,index) => (
          <li key={index} className={task.complete? 'bg-cyan-500 text-black py-4 px-3 rounded-lg flex justify-between items-center hover:bg-cyan-500' : 'bg-white text-black py-4 px-3 rounded-lg flex justify-between items-center hover:bg-cyan-500'}>
            <p className={task.complete? 'line-through' : ''}>Lorem ipsum dolor sit amet.</p>
            <BiX className='text-2xl'/>
          </li> 
        ))
      }
    </>
  )
}

export default Card