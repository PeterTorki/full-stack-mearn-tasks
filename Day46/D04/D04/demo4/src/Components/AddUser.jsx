import React, { useState } from 'react';
import addStyle from '../Styles/AddUser.module.css'

const AddUser = ({addNewUser, disabled}) => {

  const [inputData, setInputData] = useState({name:'', age:''});

  const handelChange = (e)=>{
    console.log(e.target.value)
    setInputData({...inputData, [e.target.name]:e.target.value})
  }
  // const handelAgeChange = (e)=>{
  //   console.log(e.target.value)
  //   setInputData({...inputData, age:e.target.value})
  // }

  // console.log(inputData)

  const handelSubmit = (e)=>{
    e.preventDefault()

    addNewUser(inputData)
    setInputData({name:'', age:''})
  }

  return (
    <>
      <form style={Styles.formStyle} onSubmit={handelSubmit}>
        <input style={Styles.inputStyle} value={inputData.name} name='name' onChange={handelChange} type="text" placeholder='Name'/>
        <input style={Styles.inputStyle} value={inputData.age} name='age' onChange={handelChange} type="text" placeholder='Age'/>
        <input style={Styles.btnStyl} disabled={disabled} type="submit" value="Add" />
        {/* <input className={addStyle.btn} type="submit" value="Add" /> */}
      </form>
    </>
  );
}

export default AddUser;

let Styles = {
  formStyle: {width:"50%", margin:"20px auto", display:"flex", flexDirection:"column", border:"2px solid crimson", padding:"20px", borderRadius:"5px"},
  inputStyle: {width:"70%", margin:"5px auto", outline:"none", border:"2px solid cornflowerblue", padding:"10px", borderRadius:"5px"},
  btnStyl: {width:"30%", margin:"5px auto", border:"none", backgroundColor:'crimson', fontSize:"17px", color:"white", padding:"10px 15px", borderRadius:"8px"}
} 