import { useState } from "react";

const Login = ({handleLogin}) => {
  const submitHandler = (e) => {
    e.preventDefault();
handleLogin(email,password)
    setEmail("")
        setPassword("")
    
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl p-20 border-emerald-600">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          action=""
          className="flex flex-col items-center justify-center font-bold"
        >
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            value={email}
            required
            placeholder="Enter email"
            className="text-white placeholder:text-gray-200 outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full "
          />
          <input
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
            type="password"
            value={password}
            placeholder="Enter password"
            className="text-white placeholder:text-gray-200 outline-none bg-transparent border-2 mt-3 border-emerald-600 text-xl py-3 px-5 rounded-full"
          />
          <button className=" mt-7 w-[270px] text-white border-none placeholder:text-white  outline-none bg-emerald-600 border-2 text-xl py-3 px-5 rounded-full cursor-pointer">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
