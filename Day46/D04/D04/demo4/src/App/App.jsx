import { Fragment } from "react";
import "./App.css";
import User from "../Components/user";
import Task from "../Components/Task";
import Users from "../Components/Users";
import Search from "../Components/componentsInteraction/Search";
import Students from "../Components/componentsInteraction/Students";
import Root from "../Components/componentsInteraction/Root";

function App() {
  let name = "Ahmed"
  // let h1Style = {backgroundColor:'black', color:'dodgerblue', textAlign:"center"}
  return (
    <>
        {/* <h1 style={{backgroundColor:'black', color:'coral', textAlign:"center"}}>hello from app comp</h1>
        <h1 style={Styles.h1Style}>hiiiii</h1> */}

        {/* <h1>{name}</h1> */}
        {/* <Task/> */}
        {/* <User></User> */}

        <Users></Users>
        {/* <Search></Search>
        <Students></Students> */}

        {/* <Root></Root> */}
    </>
  );
}

export default App;


let Styles = {
  h1Style: {backgroundColor:'black', color:'dodgerblue', textAlign:"center"}
}