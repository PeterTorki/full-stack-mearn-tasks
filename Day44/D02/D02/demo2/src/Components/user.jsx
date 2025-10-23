import { memo } from "react";

// function User({id, name, age}) {
function User(props) {
  console.log(props)

  let {id, name, age} = props
  return (
    <>
      <div style={{width:'70%', margin:"5px auto", padding:'10px',  backgroundColor:"dodgerblue", color:'white', fontSize:"17px", borderRadius:'8px', textAlign:"center"}}>
        <div>Id: {id}</div>
        <div>Name: {name}</div>
        <div>age: {age}</div>
        <h2>{props.children}</h2>
      </div>
    </>
  );
}

export default memo(User)
