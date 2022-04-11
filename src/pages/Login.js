import React, { useState,useContext } from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { client } from "../lib/client";
import { AppContext } from "../context/AppContext";

const Login = () => {
  const history = useHistory();
   const {
  setUserData, setAllUsers
   } = useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const getUsers =  () => {
    
   const query = '*[_type == "user"] ';
    client.fetch(query).then(data => {
      const user = {
        name: name,
        email: email,
        password: password
      }
      data.filter(user => {
        return user.name === name && user.email === email && user.password === password ? setUserData(user) : setError("Invalid Credentials")
      })

      setAllUsers(data);
      console.log(data);
    });

   
    // client.getDocument("user").then((user) => {
    //   setAllUsers(user);
    //   console.log(user);
    
    // });
  };

  const handleSubmit = (e) => {

    e.preventDefault();
const doc = {
  _type: "user",
  name: name,
  email: email,
  password: password,
  
};
    client.create(doc).then((data) => {
      setUserData(data);
      history.push("/welcome");
    });
  };

  return (
    <>
      <div className="bg-blue-200 w-full h-screen justify-center items-center ">
        <div className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <h1 className="text-2xl text-center text-blue-500 font-bold">
              Login
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label  className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
               </div>
            <div className="mb-4">  
              <label  className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label  className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Sign Up
              </button>

              </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={getUsers}>
                Get all users
              </button>

              </div>
               </form> 

        </div>
      </div>
    </>
  );
};

export default Login;

//  {
/* <GoogleLogin
          clientId="1090980483720-b91b2jkt25jcsmnj9t8e8d2us7snffig.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        /> */
//  }

//    const responseGoogle = (response) => {
//      localStorage.setItem("user", JSON.stringify(response.profileObj));
//      const { name, googleId, imageUrl } = response.profileObj;
//      console.log(response.profileObj);
//      const doc = {
//        _id: googleId,
//        _type: "user",
//        name: name,
//        image: imageUrl,
//          grants: [
//   {
//     filter: "_type == 'post'",
//     permissions: ["create", "update", "read"]
//   },

// ],

//      };
//      client.create(doc).then(() => {
//        history.push("/welcome");
//      });
//    };
