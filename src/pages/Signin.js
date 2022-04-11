import React, { useState, useContext } from "react";
// import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { client } from "../lib/client";
import { AppContext } from "../context/AppContext";

const Signin = () => {
  const history = useHistory();
  const { setUserData, setAllUsers, userData, allUsers } = useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const query = '*[_type == "user" ]'
  };

  return (
    <>
      <div className="bg-blue-200 w-full h-screen justify-center items-center ">
        <div className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <h1 className="text-2xl text-center text-blue-500 font-bold">
              Signin
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            
     
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign in
              </button>
            </div>
            <div className="flex items-center justify-between"></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
