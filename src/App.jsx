// /* eslint-disable no-unused-vars */

import { React, useContext, useEffect, useState } from "react";
import AdminDashboard from "./components/Auth/DashBoard/AdminDashboard";
import EmpolyeeDashboard from "./components/Auth/DashBoard/EmpolyeeDashboard";
import { AuthContext } from "./context/AuthProvider";
import Login from "./components/Auth/Login"

const App = () => {
  const [userData,setUserData] = useContext(AuthContext);

  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);


  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser); // Safe parsing now
      setUser(userData.role);
      setloggedInUserData(userData.data);
    }
  }, []);
  


  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == 123) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setloggedInUserData(employee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee })
      );}
    } else {
      alert("Invalid Creditionals");
    }
  };
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard changeUser={setUser} /> : ""}
      {user == "employee" ? <EmpolyeeDashboard changeUser={setUser} data={loggedInUserData} /> : ""}

    </>
  );
};

export default App;
