import Header from "../../../others/header"
import TaskListNumbers from "../../../others/TaskListNumbers"
import TaskLists from "../../TaskList/TaskLists"
const EmpolyeeDashboard = (props) => {
  
  return (
    <div>
        <div className="p-18 bg-[#1C1C1C h-screen" >

            <Header changeUser={props.changeUser} data={props.data}></Header>
            <TaskListNumbers data={props.data}/>
          <TaskLists data={props.data}/>
        </div>
    </div>
  )
}

export default EmpolyeeDashboard