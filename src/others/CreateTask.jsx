
const CreateTask = () => {
  return (
    <div className="p-5 mt-7 rounded bg-[#1c1c1c]">
    {" "}  
    <form action="" className="flex flex-wrap w-full item-start justify-between">
      <div className="w-1/2">
        <div>
        {" "}
        <h3 className="text-sm text-grey-300 mb-0.5">Task Title</h3>
        <input type="text" placeholder="Make a ui" className="text-sm mt-1 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4"/>
      </div>
      <div>
        {" "}
        <h3 className="text-sm text-grey-300 mb-0.5">Date</h3>
        <input type="date" className="text-sm py-1 px-2 w-4/5  mt-1 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4"/>
      </div>
      <div>
        {" "}
        <h3 className="text-sm text-grey-300 mb-0.5">Assign To</h3>
        <input type="text" placeholder="employee name"className="text-sm mt-1  py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4" />
      </div>
      <div>
        <h3 className="text-sm text-grey-300 mb-0.5">Category</h3>
        <input type="text" placeholder="design,dev,etc"className="text-sm mt-1  py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4" />
      </div>
      </div>
      <div className="w-2/5 flex flex-col items-start">
        <h3  className="text-sm text-grey-300 mb-0.5">Description</h3>
        <textarea className=" w-full h-44 text-sn py-2 px-4 mt-1 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4" name="" id=""></textarea>
      </div>
      <button className="cursor-pointer font-semibold bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create Task</button>
    </form>
  </div>
  )
}

export default CreateTask