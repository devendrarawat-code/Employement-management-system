import Header from "../../../others/header"
import TaskListNumbers from "../../../others/TaskListNumbers"
import TaskLists from "../../TaskList/TaskLists"
const EmpolyeeDashboard = ({data}) => {
  
  return (
    <div>
        <div className="p-18 bg-[#1C1C1C h-screen" >

            <Header data={data}></Header>
            <TaskListNumbers data={data}/>
          <TaskLists data={data}/>
        </div>
    </div>
  )
}

export default EmpolyeeDashboard