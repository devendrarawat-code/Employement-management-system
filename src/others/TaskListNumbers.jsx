const TaskListNumbers = ({data}) => {
  return (
    <div className="flex mt-10 w-full justify-between gap-5">
        <div className="p-10 px-9 py-6 w-[30%] rounded-xl bg-red-600">
            <h2 className="text-white text-3xl font-semibold">{data.tasks_count.new_task}</h2>
            <h3 className="text-xl text-white font-medium">New Task</h3>
        </div>
        <div className="p-10 px-9 py-6 w-[30%] rounded-xl bg-blue-600">
            <h2 className="text-white text-3xl font-semibold">{data.tasks_count.completed}</h2>
            <h3 className="text-xl text-white font-medium">Completed Task</h3>
        </div>
        <div className="p-10 px-9 py-6 w-[30%] rounded-xl bg-green-600">
            <h2 className="text-white text-3xl font-semibold">{data.tasks_count.active}</h2>
            <h3 className="text-xl text-white font-medium">Accepted Task</h3>
        </div>
        <div className="p-10 px-9 py-6 w-[30%] rounded-xl bg-yellow-600">
            <h2 className="text-white text-3xl font-semibold">{data.tasks_count.failed}</h2>
            <h3 className="text-xl text-white font-medium">Failed Task</h3>
        </div>
     
    
    </div>
  )
}

export default TaskListNumbers