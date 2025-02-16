// /* eslint-disable no-unused-vars */
import Login from "./components/Auth/Login";
import { React, useContext, useEffect, useState } from "react";
// import { getLocalStorage } from './utils/LocalStorage'
import AdminDashboard from "./components/Auth/DashBoard/AdminDashboard";
import EmpolyeeDashboard from "./components/Auth/DashBoard/EmpolyeeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const authData = useContext(AuthContext);

  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == 123) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setloggedInUserData(employee);
      }
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee })
      );
    } else {
      alert("Invalid Creditionals");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : ""}
      {user == "employee" ? <EmpolyeeDashboard data={loggedInUserData} /> : ""}
    </>
  );
};

export default App;
