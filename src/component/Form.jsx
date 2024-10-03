import React, { useState } from 'react'

const Form = (addNewTask) => {

  const [value,setValue] = useState('')

  return (
    <form action="" onSubmit={e => {
      e.preventDefault()
      addNewTask(value)
    }} className='bolck w-full md:w-1/3'>
        <div className='flex gap-4'>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder='Add New Task' className='bg-white text-black py-3 px-3 rounded-lg'/>
            <button type='submit' className='bg-black text-white w-1/3 rounded-lg'>Add Task</button>
        </div>
    </form>
  )
}

export default Form