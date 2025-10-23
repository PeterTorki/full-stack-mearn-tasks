import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import User from "./user";
import { v4 as uuid } from "uuid";
import Task from "./Task";
import AddUser from "./AddUser";
import axios from "axios";
import UseTimer from "../Hooks/useTimer";

const Users = () => {
  let [usersData, setUserData] = useState([
    { id: uuid(), name: "Ahmed", age: 8 },
    { id: uuid(), name: "Aya", age: 25 },
    { id: uuid(), name: "Omar", age: 33 },
    { id: uuid(), name: "Fatma", age: 55 },
    { id: uuid(), name: "Nader", age: 15 },
    { id: uuid(), name: "Hamza", age: 6 },
  ]);
  //  let [usersData, setUserData] = useState(null)

  const [disabled, setDisabled] = useState(false);
  const [counter, setcounter] = useState(0);

  const addNewUser = (userObj) => {
    if (counter === 2) {
      setDisabled(true);
    }
    console.log(userObj);

    setUserData([...usersData, { ...userObj, id: uuid(), age: +userObj.age }]);
    setcounter((old) => old + 1);
  };

  const incrAgeFun = useCallback(
    (uId) => {
      setUserData(
        usersData.map((usr) =>
          usr.id === uId ? { ...usr, age: usr.age + 1 } : usr
        )
      );
    },
    [usersData]
  );

  const decrAgeFun = (uId) => {
    setUserData(
      usersData.map((usr) =>
        usr.id === uId ? { ...usr, age: usr.age - 1 } : usr
      )
    );
  };

  //  console.log(x)

  const deleteUserFun = (uId) => {
    setUserData(usersData.filter((usr) => usr.id !== uId));
  };

  // useEffect
  // syntax
  // useEffect(()=>{}, [])
  // case 1 ==> componentDidMount, componentDidUpdate
  // useEffect(()=>{
  //   console.log("ay7aga")
  // })

  // // case 2 ==> componentDidMount
  //   useEffect(()=>{
  //     console.log("ay7aga")
  //   }, [])

  // // case 3 ==> componentDidMount, componentDidUpdate only with [counter, x, y]
  //   useEffect(()=>{
  //     console.log("ay7aga")
  //   }, [counter, x, y ])

  // // case 4 ==> componentDidMount, componentWillUnmount
  //   useEffect(()=>{
  //     console.log("ay7aga")

  //     let timer = setInterval(() => {
  //       console.log("interval Worked")
  //     }, 1000);

  //     return ()=>{
  //       console.log("CleanUp")
  //       clearInterval(timer)
  //     }
  //   }, [])

  // case 5 ==> componentDidMount
  // useEffect(()=>{
  //   console.log("ay7aga")

  //   let timer = setInterval(() => {
  //     console.log("interval Worked")
  //   }, 1000);

  //   return ()=>{
  //     console.log("CleanUp")
  //     clearInterval(timer)
  //   }
  // })

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/users")
  //   .then((res)=> setUserData(res.data))
  // }, []);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((res)=> res.json())
  //   .then((data)=> setUserData(data))
  // }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     let res = await fetch("https://jsonplaceholder.typicode.com/users")
  //     let data = await res.json()
  //     setUserData(data)
  //   }
  //   fetchData()
  // }, []);

  let adults = useMemo(() => {
    usersData.filter((usr) => {
      console.log("Audlts recalculation");
      return usr.age >= 18;
    }).length;
  }, [usersData]);

  const [incrCounter, setIncrCounter] = useState(0);

  const hanleChange = () => {
    setIncrCounter((old) => old + 1);
  };

  // useMemo(()=>{}, [])

  let myRef = useRef(null)

  const handelFoucs = ()=>{
    console.log(myRef)
    myRef.current.focus()
  }

  let myRef2 = useRef(0);
  myRef2.current = myRef2.current + 1;


  let [timer, incrTimer, decrTimer] = UseTimer(50);

  // console.log(x)
  if (!usersData) {
    return (
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <>
    <h1>Timer: {timer}</h1>
    <button onClick={incrTimer}>+</button>
    <button onClick={decrTimer}>-</button>
    <hr />
    <h1>num of render: {myRef2.current}</h1>
    <hr />
      <input ref={myRef} type="text" />
      <button className="btn btn-danger mx-5" onClick={handelFoucs}>Focus</button>
      <h2>num of adults user: {adults}</h2>
      <hr />
      <h2>incrCounter: {incrCounter}</h2>
      <button className="btn btn-warning mx-5" onClick={hanleChange}>
        icr
      </button>
      <h1>num of new user: {counter}</h1>
      <AddUser disabled={disabled} addNewUser={addNewUser}></AddUser>
      <div className="d-flex flex-wrap mx-auto gap-3" style={{ width: "80%" }}>
        {usersData.map((usr) => (
          <User
            deleteUserFun={deleteUserFun}
            decrAgeFun={decrAgeFun}
            incrAgeFun={incrAgeFun}
            key={uuid()}
            {...usr}
          ></User>
        ))}
      </div>
    </>
  );
};

export default Users;
