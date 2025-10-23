import { useState } from "react";
import User from "./user";
import { v4 as uuid } from 'uuid';
import Task from "./Task";

const Users = () => {

   let [usersData] = useState([
    {id:uuid(), name:"Ahmed", age:8},
    {id:uuid(), name:"Aya", age:25},
    {id:uuid(), name:"Omar", age:33},
    {id:uuid(), name:"Fatma", age:55},
    {id:uuid(), name:"Nader", age:15},
    {id:uuid(), name:"Hamza", age:6},
   ])

  //  console.log(x)
   
  return (
    <>
      {/* {usersData.map((usr)=> <User userName="Mohamed"></User> )} */}
      {/* {usersData.map((usr)=> <User id={usr.id} name={usr.name} age={usr.age}></User> )} */}
      {usersData.map((usr)=> <User key={uuid()} {...usr}>
        {/* initial data for test
        <button>Done</button>
        <Task></Task> */}
      </User> )}
    </>
  );
}

export default Users;
