import React,{useEffect, useState, useContext} from "react";
// import { client } from "../lib/client";
import {AppContext} from "../context/AppContext";
const Welcome = () => {
   const { userData } = useContext(AppContext);
  //  console.log(userData);
  return (
    <>
      <div>
        <h1>{`Welcome${userData?.name}`}</h1>
        <p>{`Email: ${userData?.email}`}</p>
        <p>{`Password: ${userData?.password}`}</p>
      </div>
    </>
  );
};

export default Welcome;
