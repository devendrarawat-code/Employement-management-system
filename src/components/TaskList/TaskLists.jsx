/* eslint-disable react/jsx-key */
import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"

const TaskLists = ({data}) => {
    return (
      <div id="tasklist" className='  text-white mt-10 overflow-x-auto py-5 h-[55%] w-full flex items-center justify-start gap-5 '>  
      {data.tasks.map((elem,idx)=>{
        if(elem.completed){
           return <CompleteTask key={idx} data={elem}/>
        }
        if(elem.active){
           return <AcceptTask key={idx} data={elem}/>
        }
        if(elem.failed){
           return <FailedTask key={idx} data={elem}/>
        }
        if(elem.new_task){
           return <NewTask key={idx} data={elem}/>
        }
     
      })}
     </div>
    )
  }
  
  export default TaskLists