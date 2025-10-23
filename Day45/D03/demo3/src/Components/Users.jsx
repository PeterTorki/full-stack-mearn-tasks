import { useState } from "react";
import User from "./user";
import { v4 as uuid } from 'uuid';
import Task from "./Task";
import AddUser from "./AddUser";

const Users = () => {

   let [usersData, setUserData] = useState([
    {id:uuid(), name:"Ahmed", age:8},
    {id:uuid(), name:"Aya", age:25},
    {id:uuid(), name:"Omar", age:33},
    {id:uuid(), name:"Fatma", age:55},
    {id:uuid(), name:"Nader", age:15},
    {id:uuid(), name:"Hamza", age:6},
   ])

   const  addNewUser = (userObj)=>{
    console.log(userObj)

    setUserData([...usersData, {...userObj, id:uuid(), age: +userObj.age}])
   }


   const incrAgeFun= (uId)=>{
    // console.log("incrAgeFun worked from parent", uId)
    // let userIndex = usersData.findIndex((usr)=> usr.id === uId)
    // console.log(userIndex)

    // // usersData[userIndex] = {...usersData[userIndex], age: usersData[userIndex].age+1}
    // usersData[userIndex].age++
    // setUserData([...usersData])

    setUserData(usersData.map((usr)=> usr.id === uId? {...usr, age:usr.age+1}: usr))
  }
   const decrAgeFun= (uId)=>{
    setUserData(usersData.map((usr)=> usr.id === uId? {...usr, age:usr.age-1}: usr))
  }

  //  console.log(x)

  const deleteUserFun =(uId)=> {
    setUserData(usersData.filter((usr)=> usr.id !== uId))
  }
   
  return (
    <>
      <AddUser addNewUser={addNewUser}></AddUser>
      {/* {usersData.map((usr)=> <User userName="Mohamed"></User> )} */}
      {/* {usersData.map((usr)=> <User id={usr.id} name={usr.name} age={usr.age}></User> )} */}
      {usersData.map((usr)=> <User deleteUserFun={deleteUserFun} decrAgeFun={decrAgeFun} incrAgeFun={incrAgeFun} key={uuid()} {...usr}>
        {/* initial data for test
        <button>Done</button>
        <Task></Task> */}
      </User> )}
    </>
  );
}

export default Users;
