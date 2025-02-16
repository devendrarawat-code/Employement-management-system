import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="h-full flex-shrink-0 p-5 w-[300px] bg-red-600 rounded-xl ">
    <div className="flex justify-between items-center ">
        <h3 className="bg-red-500 text-sm px-3 py-1 font-bold rounded">{data.category}</h3>
        <h4 className="text-sm font-semibold">{data.task_date}</h4>
    </div>
    <h2 className="mt-5 text-2xl font-bold">{data.task_title}</h2>
    <p className="text-m font-bold mt-2">{data.task_description}</p>
    <div className='mt-2'>
      <button className='w-full bg-yellow-500 text-sm cursor-pointer p-1 rounded mt-3 font-bold'>Failed</button>
    </div>
</div>
  )
}

export default FailedTask