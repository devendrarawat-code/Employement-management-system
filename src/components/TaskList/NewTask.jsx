import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className="h-full flex-shrink-0 p-5 w-[300px] bg-green-500 rounded-xl ">
    <div className="flex justify-between items-center ">
        <h3 className="bg-red-500 text-sm px-3 py-1 font-bold rounded">{data.category}</h3>
        <h4 className="text-sm font-bold">{data.task_date}</h4>
    </div>
    <h2 className="mt-5 text-2xl font-bold">{data.task_title}</h2>
    <p className="text-m mt-2 font-bold">{data.task_description}</p>
    <div className='mt-4'>
        <button className='w-full bg-red-500 text-sm cursor-pointer p-1 rounded mt-3 font-bold'>Accept Task</button>
    </div>
</div>
  )
}

export default NewTask