"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
// useState
const page = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")

//   useEffect((e)=>{

// console.log("name is ",name)
//   },[name])


  const insert = async () => {
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "next-action":"POST"
        },
        body: JSON.stringify({
          name,
          email
        }),
      });
      const data = await response.json();
      if(data=="ok"){
        alert("inserted")
      }
      else{
        alert("something went wrong")
      }
      console.log("please is ",data)
      // console.log("func is", data);
      // setAllNotes(data); // Set the fetched data to the state
    } catch (error) {
      console.log(error);
    }
  };

  // insert()

  return (
    <div>
      <form action="/signup" method="post">
        <input style={{color:"black"}} value={name} onChange={(e)=>{setName(e.target.value)}} type="text" name="name" placeholder="Name" />
        <input style={{color:"black"}} value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input onClick={insert} type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default page;
