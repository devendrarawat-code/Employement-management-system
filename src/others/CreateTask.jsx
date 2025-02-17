
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const CreateTask = () => {

  const [userData,setUserData]=useContext(AuthContext)
  const [task_title, settask_title] = useState('');
  const [task_description, settask_description] = useState('');
  const [task_date, settask_date] = useState('');
  const [first_name, setfirst_name] = useState('');
  const [category, setcategory] = useState('');
  const [task, settask] = useState({});
 

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      task_title,
      task_description,
      task_date,
      category,
      first_name,
      active: false,
      new_task: true,
      failed: false,
      completed: false,
    };

    // Update the state with the new task
    settask(newTask);


userData.forEach(function(elem){
 if(first_name==elem.first_name){
 elem.tasks.push(newTask)
 elem.tasks_count.new_task=  elem.tasks_count.new_task+1;
 }
})
setUserData(userData)
console.log(userData)

    // Reset form fields
    settask_title('');
    settask_description('');
    settask_date('');
    setfirst_name('');
    setcategory('');
  };

  return (
    <div className="p-5 mt-7 rounded bg-[#1c1c1c]">
      <form onSubmit={submitHandler} className="flex flex-wrap w-full item-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-grey-300 mb-0.5">Task Title</h3>
            <input
              value={task_title}
              onChange={(e) => settask_title(e.target.value)}
              type="text"
              placeholder="Make a UI"
              className="text-sm mt-1 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4"
            />
          </div>
          <div>
            <h3 className="text-sm text-grey-300 mb-0.5">Date</h3>
            <input
              value={task_date}
              onChange={(e) => settask_date(e.target.value)}
              type="date"
              className="text-sm py-1 px-2 w-4/5 mt-1 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4"
            />
          </div>
          <div>
            <h3 className="text-sm text-grey-300 mb-0.5">Assign To</h3>
            <input
              value={first_name}
              onChange={(e) => setfirst_name(e.target.value)}
              type="text"
              placeholder="Employee Name"
              className="text-sm mt-1 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4"
            />
          </div>
          <div>
            <h3 className="text-sm text-grey-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              type="text"
              placeholder="design, dev, etc."
              className="text-sm mt-1 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-grey-300 mb-0.5">Description</h3>
          <textarea
            value={task_description}
            onChange={(e) => settask_description(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 mt-1 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4"
          />
        </div>
        <button
          className="cursor-pointer font-semibold bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
