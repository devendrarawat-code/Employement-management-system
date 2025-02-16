import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className="h-full flex-shrink-0 p-5 w-[300px] bg-blue-500 rounded-xl ">
    <div className="flex justify-between items-center ">
        <h3 className="bg-red-500 text-sm px-3 py-1 font-bold rounded">{data.category}</h3>
        <h4 className="text-sm font-bold">{data.task_date}</h4>
    </div>
    <h2 className="mt-5 text-2xl font-bold">{data.task_title}</h2>
    <p className="text-m font-bold mt-2">{data.task_description}</p>
    <div className='flex justify-between mt-4'>
        <button className='bg-green-500 py-1 px-2  text-sm font-bold cursor-pointer'>Mark as Completed</button>
        <button  className='bg-red-500 py-1 px-2 text-sm  font-bold cursor-pointer'>Mark as Failed</button>
    </div>
</div>
  )
}

export default AcceptTask