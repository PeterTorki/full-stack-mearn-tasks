import axios from "axios";
import { Component, PureComponent } from "react";

import img1 from "../assets/Images/image1.jpg"
import img2 from "../assets/Images/image2.jpg"

class Task extends PureComponent{

  constructor(){
    super()
    this.state = {
      // task:{taskName: "Mongo_DB", isDone:false}
      task:null
    }

    console.log("constructor☀️")
  }


  // state = {
  //   task: 'React.js Task',
  //   taskList: [
  //     {id:'1', taskName:'Angular'},
  //     {id:'2', taskName:'Node.js'}
  //   ]
  // }

  componentDidMount(){
    console.log("componentDidMount 🌅")
    // fetch("https://jsonplaceholder.typicode.com/todos/2")
    // .then((res)=> res.json())
    // .then((data)=> this.setState({task: data}))

    axios.get("https://jsonplaceholder.typicode.com/todos/2")
    .then((res)=>this.setState({task: res.data}))
  }

  // shouldComponentUpdate(){
  //   console.log("shouldComponentUpdate🔰")
  //   return false
  // }

  componentDidUpdate(){
    console.log("componentDidUpdate")
  }

  componentWillUnmount(){
    console.log("componentWillUnmount 😔🚶🏻‍➡️")
  }

  render(){

    console.log("render🔁")

    let HandelClick = ()=>{
      // this.state.task.isDone = true // ❌❌

      this.setState({task:{...this.state.task,completed:true}})

      console.log(this.state.task.isDone)
    }

    if(!this.state.task){return <h1>loooooooooodinggg</h1>}

    return (
      <>
        {/* <h2>Hello from Task Comp</h2>
        <h2>Your Task is: {this.state.taskName}</h2> */}

        <div style={{textAlign:"center", fontSize:"22px"}}>
          {/* <div>Your Task: <span style={{backgroundColor:"orange"}}>{this.state.task.taskName}</span>, {this.state.task.isDone? 'Done':'Inprogress'}</div> */}
          <div>Your Task: <span style={{backgroundColor:"orange"}}>{this.state.task.title}</span>, {this.state.task.completed? 'Done':'Inprogress'}</div>
          <button onClick={HandelClick}>Done</button>
        </div>

        <img width={250} src="/image3.jpg" alt="" />
        <img width={250} src={img1} alt="" />
        <img width={250} src={img2} alt="" />
      </>
    )
  }
}


export default Task;