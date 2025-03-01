import React from 'react'
import { useState } from 'react';
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
   <>
          <header className="relative w-full bg-cover bg-center bg-no-repeat h-[100vh]">
            <div className="flex justify-center items-center h-full z-10">
              <form onSubmit={(e) => {
            submitHandler(e);
          }} action="" className="w-full max-w-md p-8 bg-black bg-opacity-70 rounded-lg">
                <div className="space-y-10">
                  <h1 className="text-3xl font-bold text-center">Sign In</h1>
    
                  <div className="space-y-7 p-5 ">
                    <div>
                      <input onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            value={email}
            required placeholder="Email or mobile number" className="w-full h-12 px-4 text-lg bg-black bg-opacity-70 text-white border-2 border-gray-600 rounded-md" />
                    </div>
                    <div>
                      <input onChange={(e)=>{
            setPassword(e.target.value)
          }}
            type="password"
            value={password}placeholder="Password" className="w-full h-12 px-4 text-lg bg-black bg-opacity-70 text-white border-2 border-gray-600 rounded-md" />
                    </div>
                    <div className="mt-4">
                      <button className="w-full py-3 cursor-pointer bg-red-600 text-white rounded-md text-lg font-bold">Sign In</button>
                    </div>
                    <div className="text-center text-sm mt-2">OR</div>
                    <div className="mt-2 text-center">
                      <a href="" className="text-sm text-white">Forgot password?</a>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4 mt-6 p-5">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="h-5 w-5" />
                      <label className="text-sm">Remember me</label>
                    </div>
                    <div className="text-sm text-center">
                      New to this site ? <a href="" className="text-blue-500">Sign up now.</a>
                    </div>
                    <div className="text-xs text-center text-gray-500">
                      This page is protected by Google reCAPTCHA to ensure you re not a bot. <a href="" className="text-blue-500">Learn more.</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </header>
        
    </>
  )
}

export default Login