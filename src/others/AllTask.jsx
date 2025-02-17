import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"

const AllTask = () => {
    const [userData, setUserData]=useContext(AuthContext)
console.log(userData)
  return (
    <div  className='bg-[#1c1c1c] p-5 mt-5 rounded h-70'>
        <div className='mb-2 py-2  font-bold px-4 bg-red-500 flex justify-between rounded'>
            <h2 className="w-1/5">Employee name</h2>
            <h3 className="w-1/5">New Task</h3>
            <h5 className="w-1/5">Active Task</h5>
            <h5 className="w-1/5">Completed Task</h5>
            <h5 className="w-1/5">Failed Task</h5>
            </div>
<div id="alltask" className="h-[80%] overflow-auto">
{userData.map((elem,idx)=>{
    return(
            <div key={idx} className='bg-purple-500 mb-2 py-2 font-bold px-4 flex justify-between rounded'>
            <h2 className="w-1/5 ">{elem.first_name}</h2>
            <h3 className="w-1/5  ">{elem.tasks_count.new_task}</h3>
            <h5 className="w-1/5  ">{elem.tasks_count.active}</h5>
            <h5 className="w-1/5 ">{elem.tasks_count.completed}</h5>
            <h5 className="w-1/5 ">{elem.tasks_count.failed}</h5>
            </div>
    )
})}
</div>
</div>
  )
}

export default AllTask