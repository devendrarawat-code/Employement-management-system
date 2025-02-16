import AllTask from "../../../others/AllTask";
import CreateTask from "../../../others/CreateTask";
import Header from "../../../others/header";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10">
      <Header></Header>
     <CreateTask></CreateTask>
     <AllTask></AllTask>
    </div>
  );
};

export default AdminDashboard;
